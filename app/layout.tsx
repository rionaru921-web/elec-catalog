import type { Metadata } from 'next';
import './globals.css';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Starfield from '@/components/Starfield';

const AmbientBackground = dynamic(
  () => import('@/components/three/AmbientBackground').then(m => ({ default: m.AmbientBackground })),
  { ssr: false }
);

export const metadata: Metadata = {
  metadataBase: new URL('https://elec-catalog.vercel.app'),
  title: {
    default: 'CATALOG — 形状で索引する電子機器カタログ',
    template: '%s | CATALOG'
  },
  description:
    '用途ではなく、物理的な形状で電子機器を索引する。21タイプコード × 50製品のカタログ。PC・スマホ・タブレット・オーディオ・周辺機器。',
  keywords: ['カタログ', '電子機器', 'タイプコード', 'ガジェット', 'iPhone', 'MacBook', 'iPad', 'ヘッドホン', 'PC'],
  authors: [{ name: 'CATALOG' }],
  openGraph: {
    title: 'CATALOG — 形状で索引する電子機器カタログ',
    description: '用途ではなく、物理的な形状で電子機器を索引する。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'CATALOG'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CATALOG — 形状で索引する電子機器カタログ',
    description: '用途ではなく、物理的な形状で電子機器を索引する。'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="scanlines relative min-h-screen bg-black text-white">
        {/* 3D 常駐背景（z-index: -1 / fixed / pointer-events: none） */}
        <AmbientBackground />
        <Starfield />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
