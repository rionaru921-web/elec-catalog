import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'CATALOG — 形状で索引する電子機器カタログ';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}
      >
        {/* Ghost ◉ 背景 */}
        <div
          style={{
            position: 'absolute',
            right: -40,
            top: -60,
            fontSize: 400,
            fontWeight: 900,
            color: 'rgba(0, 255, 149, 0.05)',
            fontFamily: 'monospace',
            letterSpacing: '-0.05em',
            lineHeight: 1
          }}
        >
          ◉
        </div>

        {/* ブランド */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#00FF95',
            fontSize: 32,
            letterSpacing: '0.25em',
            fontFamily: 'monospace',
            marginBottom: 48,
            zIndex: 1
          }}
        >
          <span style={{ fontSize: 40 }}>◉</span>
          <span style={{ fontWeight: 700 }}>CATALOG</span>
        </div>

        {/* メインコピー */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            color: '#fff',
            fontSize: 88,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            zIndex: 1
          }}
        >
          <div>用途は変わる。</div>
          <div style={{ color: '#00FF95' }}>形状は変わらない。</div>
        </div>

        {/* STAT BAR */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            color: '#555',
            fontSize: 22,
            marginTop: 56,
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            zIndex: 1,
            textTransform: 'uppercase'
          }}
        >
          <span><span style={{ color: '#00FF95' }}>21</span> TYPES</span>
          <span style={{ color: '#333' }}>×</span>
          <span><span style={{ color: '#00FF95' }}>5</span> CATEGORIES</span>
          <span style={{ color: '#333' }}>×</span>
          <span><span style={{ color: '#00FF95' }}>50</span> ITEMS</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
