import type { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import Card3D from '@/components/ui/Card3D';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata: Metadata = {
  title: 'TYPE CODE INDEX | CATALOG',
  description: '全タイプコードを一覧表示。物理的な形状で電子機器を索引する。'
};

export default function CatalogPage() {
  const totalTypes = categories.reduce((sum, c) => sum + c.subCategories.length, 0);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Catalog' }]} />
      </div>

      {/* ==================== § 00 INTRO ==================== */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-12">
        {/* Ghost "INDEX" 背景 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-4 select-none font-mono font-black leading-none text-neon/[0.04]"
          style={{ fontSize: 'clamp(80px, 18vw, 280px)' }}
        >
          INDEX
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-sm text-neon">§ 00</span>
            <span className="font-mono text-sm uppercase tracking-widest text-pale-500">Index</span>
          </div>

          <h1 className="mb-6 text-5xl font-black leading-none tracking-tightest text-white lg:text-7xl">
            TYPE CODE<br />
            INDEX <span className="text-neon">◉</span>
          </h1>

          <p className="mb-10 max-w-2xl text-base leading-relaxed text-pale-700 lg:text-lg">
            全ての電子機器を、用途ではなく{' '}
            <span className="text-neon">物理的な形状</span>{' '}
            で索引する。それぞれのコードは独自の階層を持ち、明確な分類軸を提供する。
          </p>

          {/* STAT BAR */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-neon/20 py-5 font-mono text-sm">
            <StatItem value={String(totalTypes)} label="Types" />
            <span className="text-pale-300/30">×</span>
            <StatItem value={String(categories.length)} label="Categories" />
            <span className="text-pale-300/30">×</span>
            <StatItem value={String(products.length)} label="Items" />
          </div>
        </div>
      </section>

      {/* ==================== カテゴリ別セクション ==================== */}
      {categories.map((cat, idx) => {
        const catProductCount = products.filter(p => p.category === cat.id).length;
        return (
          <section
            key={cat.id}
            id={cat.code}
            className="mx-auto max-w-6xl scroll-mt-24 border-t border-pale-300/30 px-6 py-16"
          >
            <div className="mb-10 flex flex-wrap items-baseline gap-4">
              <span className="font-mono text-sm text-neon">
                §{String(idx + 1).padStart(2, '0')}
              </span>
              <span className="font-mono text-sm text-pale-500">[{cat.code}]</span>
              <h2 className="text-3xl font-bold tracking-tightest text-white lg:text-4xl">
                {cat.nameEn} <span className="text-neon">◉</span>
              </h2>
              <span className="font-mono text-xs uppercase tracking-widest text-pale-500">
                {catProductCount} items / {cat.subCategories.length} types
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.subCategories.map(sub => {
                const count = products.filter(p => p.subCategoryCode === sub.code).length;
                return (
                  <Card3D key={sub.code} intensity={8}>
                    <Link
                      href={`/c/${cat.id}#${sub.code}`}
                      className="group flex h-full flex-col border border-neon/30 bg-black p-6 transition-colors hover:border-neon hover:bg-void-900"
                    >
                      <div className="mb-5 flex items-start justify-between">
                        <span className="font-mono text-2xl font-bold tracking-tight text-neon lg:text-3xl">
                          {sub.code}
                        </span>
                        <span className="text-xl text-neon/40 transition-all group-hover:translate-x-1 group-hover:text-neon">
                          →
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-white">{sub.name}</h3>
                      {sub.description && (
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-pale-700">
                          {sub.description}
                        </p>
                      )}
                      <div className="mt-auto border-t border-neon/10 pt-3 font-mono text-xs uppercase tracking-widest text-pale-500">
                        {count} {count === 1 ? 'item' : 'items'}
                      </div>
                    </Link>
                  </Card3D>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* ==================== END ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-16">
        <div className="text-center">
          <div className="mb-4 font-mono text-xs uppercase tracking-widest text-pale-500">
            ━━━ END OF INDEX ━━━
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-pale-500 transition-colors hover:text-neon"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-2xl font-bold text-neon glow-soft lg:text-3xl">{value}</span>
      <span className="text-xs uppercase tracking-widest text-pale-500">{label}</span>
    </div>
  );
}
