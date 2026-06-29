import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategory, getSubcategory, getProductsBySubcategory } from '@/data/products';
import Card3D from '@/components/ui/Card3D';
import TypeCodeBadge from '@/components/ui/TypeCodeBadge';

export function generateStaticParams() {
  const params: { category: string; subcategory: string }[] = [];
  for (const c of categories) {
    for (const s of c.subCategories) {
      params.push({ category: c.id, subcategory: s.code.toLowerCase() });
    }
  }
  return params;
}

export default function SubcategoryPage({
  params
}: {
  params: { category: string; subcategory: string };
}) {
  const cat = getCategory(params.category);
  const sub = getSubcategory(params.category, params.subcategory);
  if (!cat || !sub) notFound();

  const items = getProductsBySubcategory(cat.id, params.subcategory);

  return (
    <>
      {/* ===== HEADER ===== */}
      <section className="relative border-b border-pale-300/30">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-14">
          <Breadcrumb
            items={[
              { label: 'Index', href: '/' },
              { label: cat.name, href: `/c/${cat.id}` },
              { label: sub.name }
            ]}
          />

          <div className="mt-8 flex items-baseline gap-4">
            <span className="font-mono text-xs text-neon glow-soft">{sub.code}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
              {items.length} item{items.length === 1 ? '' : 's'}
            </span>
          </div>

          <h1 className="mt-4 text-6xl font-black tracking-tightest text-white md:text-8xl">
            {sub.name}
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-pale-700">{sub.description}</p>
        </div>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        {items.length === 0 ? (
          <EmptyState subcategoryName={sub.name} />
        ) : (
          <div className="grid gap-px border border-pale-300/30 bg-pale-300/30 md:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Card3D key={p.id}>
                <Link
                  href={`/products/${p.id}`}
                  className="group flex h-full flex-col bg-black transition-colors hover:bg-void-900"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-pale-300/30 bg-void-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: 'radial-gradient(circle at center, rgba(0,255,149,0.15) 0%, transparent 60%)' }}
                    />
                    <TypeCodeBadge code={sub.code} variant="overlay" size="sm" className="absolute left-3 top-3" />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] text-neon">
                        {sub.code}-{String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-pale-500">
                        {p.brand}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold tracking-tightest text-white group-hover:text-neon">
                      {p.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-pale-700">
                      {p.summary ?? p.description}
                    </p>
                    <div className="mt-auto pt-6 font-mono text-xs text-neon glow-soft">
                      {p.priceText ?? `¥${p.price.toLocaleString()}`}
                    </div>
                  </div>
                </Link>
              </Card3D>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function EmptyState({ subcategoryName }: { subcategoryName: string }) {
  return (
    <div className="border border-dashed border-pale-300/30 p-16 text-center">
      <div className="font-mono text-[11px] uppercase tracking-widest text-neon">◉ NO ITEMS YET</div>
      <p className="mt-4 text-pale-700">
        {subcategoryName} の製品はまだ掲載されていません。
        <br />
        <code className="font-mono text-xs text-neon">data/products.ts</code> に追加すると、このページに反映されます。
      </p>
    </div>
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
