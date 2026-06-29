import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategory, getProductsByCategory, getProductsBySubcategory } from '@/data/products';
import Card3D from '@/components/ui/Card3D';

export function generateStaticParams() {
  return categories.map(c => ({ category: c.id }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const cat = getCategory(params.category);
  if (!cat) notFound();

  const totalProducts = getProductsByCategory(cat.id).length;

  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="relative border-b border-pale-300/30">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <Breadcrumb items={[{ label: 'Index', href: '/' }, { label: cat.name }]} />

          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-mono text-xs text-neon glow-soft">[{cat.code}]</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
              {cat.subCategories.length} types / {totalProducts} products
            </span>
          </div>

          <h1 className="mt-4 text-6xl font-black tracking-tightest text-white md:text-8xl">
            {cat.name}
          </h1>
          <p className="mt-2 font-mono text-sm uppercase tracking-widest text-neon glow-soft">
            {cat.nameEn}
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-pale-700">{cat.description}</p>
        </div>
      </section>

      {/* ===== SUBCATEGORY LIST ===== */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between border-b border-pale-300/30 pb-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon">
              Subcategories
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tightest text-white">
              小カテゴリ
            </h2>
          </div>
        </div>

        <div className="grid gap-px border border-pale-300/30 bg-pale-300/30 md:grid-cols-2">
          {cat.subCategories.map((sub, i) => {
            const count = getProductsBySubcategory(cat.id, sub.code.toLowerCase()).length;
            return (
              <Card3D key={sub.code}>
                <Link
                  id={sub.code}
                  href={`/c/${cat.id}/${sub.code.toLowerCase()}`}
                  className="hairline-top group flex h-full flex-col bg-black p-7 transition-colors hover:bg-void-900 scroll-mt-24"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-pale-500">
                      {String(i + 1).padStart(2, '0')}{' '}
                      <span className="text-neon">/ {sub.code}</span>
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
                      {count} item{count === 1 ? '' : 's'}
                    </span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold tracking-tightest text-white transition-colors group-hover:text-neon">
                    {sub.name}
                  </h3>
                  <p className="mt-2 text-sm text-pale-700">{sub.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-neon">
                    <span>OPEN LIST</span>
                    <ArrowRight />
                  </div>
                </Link>
              </Card3D>
            );
          })}
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-pale-500">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-neon">{item.label}</Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
          {i < items.length - 1 && <span className="text-pale-400">/</span>}
        </span>
      ))}
    </nav>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
