import { ImageResponse } from "next/og";
import { getProductById } from "@/data/products";

export const runtime = "edge";

const GRID_LINES = Array.from({ length: 20 }, (_, i) => i * 40);

const CAT_COLORS: Record<string, string> = {
  pc: "#00FF95",
  sp: "#00D9FF",
  tb: "#FF00C8",
  au: "#FFD600",
  pr: "#FF6B00",
};

const STATUS_LABELS: Record<string, string> = {
  current: "CURRENT",
  "pre-order": "PRE-ORDER",
  limited: "LIMITED",
  discontinued: "DISCONTINUED",
};

const STATUS_COLORS: Record<string, string> = {
  current: "#00FF95",
  "pre-order": "#FFD600",
  limited: "#FF00C8",
  discontinued: "#888",
};

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// satori's gradient parser mis-splits commas inside rgba(), so blend to a
// flat hex (against the #0a0a0a background) for use inside linear-gradient().
function mixHex(hex: string, alpha: number, bg: [number, number, number] = [10, 10, 10]): string {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  const toHex = (n: number) => Math.round(n).toString(16).padStart(2, "0");
  return `#${toHex(bg[0] + (r - bg[0]) * alpha)}${toHex(bg[1] + (g - bg[1]) * alpha)}${toHex(bg[2] + (b - bg[2]) * alpha)}`;
}

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const product = getProductById(params.id);

  if (!product) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#0a0a0a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: 32,
            letterSpacing: "0.3em",
            fontFamily: "monospace",
          }}
        >
          NOT FOUND
        </div>
      ),
      { width: 800, height: 800 }
    );
  }

  const accentColor = CAT_COLORS[product.category] || "#00FF95";
  const statusLabel = STATUS_LABELS[product.status ?? "current"] || "CURRENT";
  const statusColor = STATUS_COLORS[product.status ?? "current"] || "#00FF95";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          padding: "40px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* === 4隅コーナーブラケット === */}
        <div style={{ position: "absolute", top: 24, left: 24, width: 28, height: 28, borderLeft: `2px solid ${accentColor}`, borderTop: `2px solid ${accentColor}` }} />
        <div style={{ position: "absolute", top: 24, right: 24, width: 28, height: 28, borderRight: `2px solid ${accentColor}`, borderTop: `2px solid ${accentColor}` }} />
        <div style={{ position: "absolute", bottom: 24, left: 24, width: 28, height: 28, borderLeft: `2px solid ${accentColor}`, borderBottom: `2px solid ${accentColor}` }} />
        <div style={{ position: "absolute", bottom: 24, right: 24, width: 28, height: 28, borderRight: `2px solid ${accentColor}`, borderBottom: `2px solid ${accentColor}` }} />

        {/* === グリッド背景 (satoriのgradientパーサーが不安定なため実divで描画) === */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex" }}>
          {GRID_LINES.map((x) => (
            <div key={`v-${x}`} style={{ position: "absolute", top: 0, bottom: 0, left: x, width: 1, backgroundColor: mixHex(accentColor, 0.12) }} />
          ))}
          {GRID_LINES.map((y) => (
            <div key={`h-${y}`} style={{ position: "absolute", left: 0, right: 0, top: y, height: 1, backgroundColor: mixHex(accentColor, 0.12) }} />
          ))}
        </div>

        {/* === 上部: カテゴリ + ステータス === */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: accentColor }} />
            <div style={{ color: accentColor, fontSize: 16, letterSpacing: "0.3em", fontFamily: "monospace", fontWeight: 700 }}>
              {product.category.toUpperCase()}
            </div>
          </div>
          <div
            style={{
              padding: "6px 12px",
              border: `1px solid ${hexToRgba(statusColor, 0.5)}`,
              backgroundColor: hexToRgba(statusColor, 0.13),
              color: statusColor,
              fontSize: 11,
              letterSpacing: "0.25em",
              fontFamily: "monospace",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <div style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: statusColor }} />
            {statusLabel}
          </div>
        </div>

        {/* === 中央: 巨大タイプコード === */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
          <div style={{ color: accentColor, fontSize: 130, fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
            {product.typeCode}
          </div>
          <div style={{ color: "#666", fontSize: 18, letterSpacing: "0.4em", fontFamily: "monospace", marginTop: 12 }}>
            {product.id.toUpperCase()}
          </div>
        </div>

        {/* === 下部: ブランド + 製品名 + ライン + メタ === */}
        <div style={{ display: "flex", flexDirection: "column", zIndex: 10 }}>
          <div style={{ color: "#888", fontSize: 12, letterSpacing: "0.3em", fontFamily: "monospace", marginBottom: 6 }}>
            {product.brand.toUpperCase()}
          </div>
          <div style={{ color: "#fff", fontSize: 22, fontWeight: 700, lineHeight: 1.2, maxHeight: 56, overflow: "hidden" }}>
            {product.name}
          </div>
          <div style={{ width: "100%", height: 1, backgroundColor: hexToRgba(accentColor, 0.25), marginTop: 14, marginBottom: 10 }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: 11, color: "#888", letterSpacing: "0.2em" }}>
            <div>{product.priceText || `¥${product.price.toLocaleString()}`}</div>
            <div>{product.releaseDate}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 800,
      headers: {
        "Cache-Control": "public, max-age=86400, immutable",
      },
    }
  );
}
