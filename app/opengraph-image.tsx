import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ELECTRONICS - 形状で索引する電子機器カタログ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          padding: "60px 80px",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* 4隅コーナーブラケット */}
        <div style={{ position: "absolute", top: 40, left: 40, width: 30, height: 30, borderLeft: "2px solid #00FF95", borderTop: "2px solid #00FF95" }} />
        <div style={{ position: "absolute", top: 40, right: 40, width: 30, height: 30, borderRight: "2px solid #00FF95", borderTop: "2px solid #00FF95" }} />
        <div style={{ position: "absolute", bottom: 40, left: 40, width: 30, height: 30, borderLeft: "2px solid #00FF95", borderBottom: "2px solid #00FF95" }} />
        <div style={{ position: "absolute", bottom: 40, right: 40, width: 30, height: 30, borderRight: "2px solid #00FF95", borderBottom: "2px solid #00FF95" }} />

        {/* 上部HUD */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "#00FF95" }} />
            <div style={{ color: "#00FF95", fontSize: 18, letterSpacing: "0.3em", fontFamily: "monospace" }}>
              ELECTRONICS / CATALOG
            </div>
          </div>
          <div style={{ color: "#666", fontSize: 14, letterSpacing: "0.2em", fontFamily: "monospace" }}>
            v2.0 · 2026
          </div>
        </div>

        {/* 中央: 大型タイポ */}
        <div style={{ marginTop: "auto", marginBottom: 40, display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#fff", fontSize: 108, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>
            ELECTRO
          </div>
          <div style={{ color: "#00FF95", fontSize: 108, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em" }}>
            NICS.
          </div>
          <div style={{ color: "#aaa", fontSize: 26, marginTop: 24, maxWidth: 800, lineHeight: 1.4 }}>
            用途は変わる。形状は変わらない。
          </div>
        </div>

        {/* 下部: STAT + カラードット */}
        <div style={{ display: "flex", gap: 50, alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 50 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#fff", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>100</div>
              <div style={{ color: "#666", fontSize: 13, letterSpacing: "0.25em", fontFamily: "monospace", marginTop: 6 }}>PRODUCTS</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#00FF95", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>21</div>
              <div style={{ color: "#666", fontSize: 13, letterSpacing: "0.25em", fontFamily: "monospace", marginTop: 6 }}>TYPES</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#fff", fontSize: 56, fontWeight: 700, lineHeight: 1 }}>5</div>
              <div style={{ color: "#666", fontSize: 13, letterSpacing: "0.25em", fontFamily: "monospace", marginTop: 6 }}>CATEGORIES</div>
            </div>
          </div>

          {/* カテゴリ別カラードット */}
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            {(["#00FF95", "#00D9FF", "#FF00C8", "#FFD600", "#FF6B00"] as string[]).map((c, i) => (
              <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", backgroundColor: c }} />
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
