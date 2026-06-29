import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProduct, getCategory, getSubcategory, getProductsBySubcategory } from '@/data/products';

export function generateStaticParams() {
  return products.map(p => ({ productId: p.id }));
}

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = getProduct(params.productId);
  if (!product) notFound();

  const cat = getCategory(product.category);
  const sub = getSubcategory(product.category, product.subCategoryCode.toLowerCase());
  if (!cat || !sub) notFound();

  const related = getProductsBySubcategory(product.category, product.subCategoryCode.toLowerCase())
    .filter(p => p.id !== product.id)
    .slice(0, 3);

  const priceDisplay = product.priceText ?? `¥${product.price.toLocaleString()}`;
  const summaryDisplay = product.summary ?? product.description.slice(0, 150);

  return (
    <>
      {/* ===== BREADCRUMB ===== */}
      <section className="border-b border-pale-300/30">
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-6">
          <Breadcrumb
            items={[
              { label: 'Index', href: '/' },
              { label: cat.name, href: `/c/${cat.id}` },
              { label: sub.name, href: `/c/${cat.id}/${sub.code.toLowerCase()}` },
              { label: product.name }
            ]}
          />
        </div>
      </section>

      {/* ===== MAIN ===== */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="relative border border-pale-300/30 bg-void-900">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.3) 100%)' }}
              />
            </div>
            <Corner pos="tl" />
            <Corner pos="tr" />
            <Corner pos="bl" />
            <Corner pos="br" />
          </div>

          {/* Info */}
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-neon glow-soft">{sub.code}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
                {cat.name} / {sub.name}
              </span>
            </div>

            <h1 className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest text-white md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-3 font-mono text-sm uppercase tracking-widest text-pale-700">
              {product.brand}
            </div>

            <p className="mt-6 text-base leading-relaxed text-pale-700">{summaryDisplay}</p>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map(tag => (
                  <span key={tag} className="border border-neon/20 px-2 py-0.5 font-mono text-[10px] text-neon/60">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 border border-neon/30 bg-neon/5 p-5 glow-box">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-neon">
                ◉ Price range
              </div>
              <div className="mt-2 font-mono text-3xl font-semibold tracking-tightest text-white">
                {priceDisplay}
              </div>
            </div>

            {product.purchaseLink && (
              <a
                href={product.purchaseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border border-neon bg-neon px-6 py-4 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-transparent hover:text-neon hover:shadow-[0_0_24px_rgba(0,255,149,0.4)]"
              >
                <span>OPEN PURCHASE PAGE</span>
                <ArrowOut />
              </a>
            )}
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-pale-500">
              ⚠ External link / sample only
            </p>
          </div>
        </div>
      </section>

      {/* ===== FEATURES (optional) ===== */}
      {product.features && product.features.length > 0 && (
        <Section eyebrow="§ 01" title="主な特徴">
          <ul className="grid gap-px overflow-hidden border border-pale-300/30 bg-pale-300/30 md:grid-cols-2">
            {product.features.map((f, i) => (
              <li key={i} className="flex gap-4 bg-black p-5">
                <span className="font-mono text-xs text-neon glow-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-white">{f}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* ===== SPECS ===== */}
      <Section eyebrow="§ 02" title="スペック">
        <div className="border border-pale-300/30">
          <table className="w-full text-sm">
            <tbody>
              {product.specs.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-black' : 'bg-void-900'}>
                  <th className="w-1/3 border-b border-pale-300/20 px-5 py-4 text-left font-mono text-xs uppercase tracking-widest text-neon">
                    {row.label}
                  </th>
                  <td className="border-b border-pale-300/20 px-5 py-4 text-white">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ===== PROS / CONS (optional) ===== */}
      {product.pros && product.pros.length > 0 && (
        <Section eyebrow="§ 03" title="メリットとデメリット">
          <div className="grid gap-px overflow-hidden border border-pale-300/30 bg-pale-300/30 md:grid-cols-2">
            <div className="bg-black p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon glow-soft">◉ PROS</div>
              <h3 className="mt-2 text-xl font-bold tracking-tightest text-white">メリット</h3>
              <ul className="mt-5 space-y-3">
                {product.pros.map((p, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white">
                    <span className="mt-2 h-px w-3 flex-shrink-0 bg-neon shadow-[0_0_6px_rgba(0,255,149,0.6)]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-black p-6">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-pale-500">◌ CONS</div>
              <h3 className="mt-2 text-xl font-bold tracking-tightest text-white">デメリット</h3>
              <ul className="mt-5 space-y-3">
                {(product.cons ?? []).map((c, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white">
                    <span className="mt-2 h-px w-3 flex-shrink-0 bg-pale-500" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      )}

      {/* ===== DESCRIPTION ===== */}
      <Section eyebrow="§ 04" title="詳しい説明">
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-pale-700">
          {product.description.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </Section>

      {/* ===== RELATED ===== */}
      {related.length > 0 && (
        <Section eyebrow="§ 05" title={`同じ種類のほかの製品 — ${sub.name}`}>
          <div className="grid gap-px border border-pale-300/30 bg-pale-300/30 md:grid-cols-3">
            {related.map(p => (
              <Link
                key={p.id}
                href={`/p/${p.id}`}
                className="group flex flex-col bg-black transition-colors hover:bg-void-900"
              >
                <div className="aspect-[4/3] overflow-hidden border-b border-pale-300/30 bg-void-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                </div>
                <div className="p-5">
                  <div className="font-mono text-[11px] uppercase tracking-widest text-pale-500">{p.brand}</div>
                  <h4 className="mt-2 font-semibold tracking-tightest text-white group-hover:text-neon">{p.name}</h4>
                  <div className="mt-2 font-mono text-xs text-neon glow-soft">
                    {p.priceText ?? `¥${p.price.toLocaleString()}`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

/* ====================================================== */
/* SUB COMPONENTS                                          */
/* ====================================================== */
function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mb-8 flex items-baseline gap-4 border-b border-pale-300/30 pb-4">
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon glow-soft">{eyebrow}</span>
        <h2 className="text-2xl font-bold tracking-tightest text-white md:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
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

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const cls: Record<typeof pos, string> = {
    tl: 'top-0 left-0 border-t border-l',
    tr: 'top-0 right-0 border-t border-r',
    bl: 'bottom-0 left-0 border-b border-l',
    br: 'bottom-0 right-0 border-b border-r'
  };
  return <span className={`pointer-events-none absolute h-3 w-3 border-neon ${cls[pos]}`} aria-hidden />;
}

function ArrowOut() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M5 1h8v8M13 1L5 9M3 5H1v8h8v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
