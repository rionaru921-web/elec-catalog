import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Starfield from '@/components/Starfield';

export const metadata: Metadata = {
  metadataBase: new URL('https://catalog.vercel.app'), // デプロイ後に正しいURLへ更新
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
        <Starfield />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
