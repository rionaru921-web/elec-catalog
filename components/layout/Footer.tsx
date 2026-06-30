import Link from 'next/link';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function Footer() {
  const totalTypes = categories.reduce((sum, c) => sum + c.subCategories.length, 0);
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-neon/20 bg-void-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* ASCII divider */}
        <div className="mb-10 select-none overflow-hidden whitespace-nowrap font-mono text-xs text-neon/20">
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </div>

        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* LOGO + TAGLINE */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="group mb-4 flex items-center gap-3">
              <span className="text-xl text-neon transition-transform group-hover:scale-110 glow-soft">◉</span>
              <span className="font-mono text-sm font-bold tracking-widest text-white">CATALOG</span>
            </Link>
            <p className="text-xs leading-relaxed text-pale-500">
              用途ではなく、物理的な形状で電子機器を索引する。
            </p>
          </div>

          {/* SITEMAP */}
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-pale-500">
              § Sitemap
            </div>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/catalog', label: 'Type Index' },
                { href: '/about', label: 'About' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-xs uppercase tracking-widest text-pale-700 transition-colors hover:text-neon"
                  >
                    → {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-pale-500">
              § Categories
            </div>
            <ul className="space-y-2">
              {categories.map(c => (
                <li key={c.id}>
                  <Link
                    href={`/c/${c.id}`}
                    className="flex items-center gap-2 text-xs text-pale-700 transition-colors hover:text-neon"
                  >
                    <span className="font-mono text-neon/60">[{c.code}]</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BUILT WITH */}
          <div>
            <div className="mb-4 font-mono text-[10px] uppercase tracking-widest text-pale-500">
              § Built With
            </div>
            <ul className="space-y-1 text-xs text-pale-700">
              {['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Three.js', 'cmdk'].map(t => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="mt-4 font-mono text-[10px] uppercase tracking-widest text-pale-500">
              v1.0 · BUILD {year}
            </div>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t border-neon/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-pale-500">
          <span><span className="text-neon">{totalTypes}</span> Types</span>
          <span className="text-pale-300/20">×</span>
          <span><span className="text-neon">{categories.length}</span> Categories</span>
          <span className="text-pale-300/20">×</span>
          <span><span className="text-neon">{products.length}</span> Items</span>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-neon/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-pale-500">
          <span>© {year} CATALOG · All rights reserved</span>
          <span>━━ END OF DOCUMENT ━━</span>
        </div>

        {/* IMAGE ATTRIBUTION */}
        <div className="mt-4 font-mono text-[10px] normal-case tracking-normal text-pale-500">
          一部の製品画像:{' '}
          <a
            href="https://commons.wikimedia.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-neon"
          >
            Wikimedia Commons
          </a>
          （各画像のライセンスは出典ページを参照）
        </div>
      </div>
    </footer>
  );
}
