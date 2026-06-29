import Link from 'next/link';
import { categories, products, getFeaturedProducts } from '@/data/products';
import dynamic from 'next/dynamic';
import Card3D from '@/components/ui/Card3D';
import TypeCodeBadge from '@/components/ui/TypeCodeBadge';

const ParticleGalaxy = dynamic(
  () => import('@/components/three/ParticleGalaxy'),
  { ssr: false }
);

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <>
      {/* ====================================================== */}
      {/* HERO — 巨大タイポ + ギャラクシーパーティクル            */}
      {/* ====================================================== */}
      <section className="relative h-[100vh] min-h-[680px] overflow-hidden border-b border-pale-300/30">
        <ParticleGalaxy />

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 60%)'
          }}
        />

        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-pale-700">
            <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-neon shadow-[0_0_10px_rgba(0,255,149,0.8)]" />
            <span>LIVE INDEX</span>
            <span className="text-pale-500">/ 2026.06</span>
          </div>
          <a
            href="#categories"
            className="group flex items-center gap-2 border border-neon/40 px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest text-neon transition-colors hover:bg-neon hover:text-black"
          >
            <span>VIEW INDEX</span>
            <ArrowRight />
          </a>
        </div>

        <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 pb-32 text-center">
          <div className="animate-fadein font-mono text-[11px] uppercase tracking-[0.3em] text-neon glow-soft">
            ◉ Electronics / by product type
          </div>

          <h1 className="animate-fadein mt-6 text-7xl font-black leading-[0.92] tracking-tightest text-white md:text-9xl">
            ELECTRO<br />
            <span className="text-neon glow-neon">NICS.</span>
          </h1>

          <p className="animate-fadein mt-8 max-w-xl text-base leading-relaxed text-pale-700 md:text-lg">
            PC、スマートフォン、オーディオ ―
            <br />
            <span className="text-white">「誰向けか」ではなく「どんな種類か」</span>で並べた電子製品の目録。
          </p>

          <div className="animate-fadein mt-12 grid w-full max-w-xl grid-cols-3 gap-px border border-neon/30 bg-neon/30">
            <Stat label="Categories" value={String(categories.length).padStart(2, '0')} />
            <Stat label="Types" value={String(categories.reduce((a, c) => a + c.subCategories.length, 0)).padStart(2, '0')} />
            <Stat label="Products" value={String(products.length).padStart(2, '0')} />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-pale-500">
          <span className="animate-pulse-slow">SCROLL TO ENTER ↓</span>
        </div>
      </section>

      {/* ====================================================== */}
      {/* § 01 — CATEGORIES                                       */}
      {/* ====================================================== */}
      <section id="categories" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex items-end justify-between border-b border-pale-300/30 pb-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon">
              § 01 — Categories
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tightest text-white md:text-5xl">
              カテゴリから探す
            </h2>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="hidden font-mono text-xs text-pale-500 md:block">
              {categories.length.toString().padStart(2, '0')} groups indexed
            </div>
            <Link
              href="/catalog"
              className="hidden font-mono text-[10px] uppercase tracking-widest text-pale-500 transition-colors hover:text-neon md:block"
            >
              → VIEW TYPE INDEX ({categories.reduce((a, c) => a + c.subCategories.length, 0)} types)
            </Link>
          </div>
        </div>

        <div className="grid gap-px border border-pale-300/30 bg-pale-300/30 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(cat => (
            <Card3D key={cat.id}>
              <Link
                href={`/c/${cat.id}`}
                className="hairline-top group relative flex h-full flex-col bg-black p-8 transition-colors hover:bg-void-900"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs text-pale-500">[{cat.code}]</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
                    {cat.subCategories.length} types
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-bold tracking-tightest text-white transition-colors group-hover:text-neon">
                  {cat.name}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-pale-700">
                  {cat.nameEn}
                </p>

                <p className="mt-3 text-sm text-pale-700">{cat.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.subCategories.map(sub => (
                    <TypeCodeBadge key={sub.code} code={sub.code} size="sm" />
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-neon">
                  <span>OPEN CATEGORY</span>
                  <ArrowRight />
                </div>
              </Link>
            </Card3D>
          ))}
        </div>
      </section>

      {/* ====================================================== */}
      {/* § 02 — FEATURED                                         */}
      {/* ====================================================== */}
      <section className="relative border-t border-pale-300/30 bg-void-950">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-14 flex items-end justify-between border-b border-pale-300/30 pb-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon">
                § 02 — Featured
              </div>
              <h2 className="mt-3 text-4xl font-bold tracking-tightest text-white md:text-5xl">
                注目の製品
              </h2>
            </div>
            <div className="hidden font-mono text-xs text-pale-500 md:block">
              {featured.length.toString().padStart(2, '0')} items selected
            </div>
          </div>

          <div className="grid gap-px border border-pale-300/30 bg-pale-300/30 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featured.map(p => (
              <Card3D key={p.id}>
                <Link
                  href={`/products/${p.id}`}
                  className="group flex h-full flex-col bg-black transition-colors hover:bg-void-900"
                >
                  <div className="relative aspect-square overflow-hidden border-b border-pale-300/30 bg-void-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <TypeCodeBadge code={p.typeCode} variant="overlay" size="sm" className="absolute left-3 top-3" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
                      {p.brand}
                    </div>
                    <h3 className="mt-2 font-semibold leading-snug tracking-tightest text-white group-hover:text-neon">
                      {p.name}
                    </h3>
                    <div className="mt-auto pt-4 font-mono text-sm text-neon glow-soft">
                      {p.priceText ?? `¥${p.price.toLocaleString()}`}
                    </div>
                  </div>
                </Link>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* § 03 — APPROACH                                         */}
      {/* ====================================================== */}
      <section className="relative border-t border-pale-300/30">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-neon">
              § 03 — Approach
            </div>
            <h2 className="mt-3 text-4xl font-bold tracking-tightest text-white">
              この目録の前提
            </h2>
          </div>

          <div className="space-y-8">
            <Principle n="01" title="種類が先、用途は後">
              「学生向け」「仕事用」のような用途ラベルは付けない。
              まずは製品そのものの形と仕様で整理する。用途は、各製品の詳細ページで触れる。
            </Principle>
            <Principle n="02" title="同じ階層では並列に並べる">
              ノートPC、ゲーミングPC、デスクトップPC ― これらは並列の選択肢として扱う。
              一方を「主」、他方を「派生」として並べない。
            </Principle>
            <Principle n="03" title="種別の差を、特徴・スペック・価格帯で示す">
              なぜこの種別が存在するのか、その輪郭をスペックと特徴で説明する。
              「結局どれを選ぶか」は読み手に委ねる。
            </Principle>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-black p-5 text-left">
      <div className="font-mono text-4xl font-bold leading-none tracking-tightest text-white">
        {value}
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-neon">
        {label}
      </div>
    </div>
  );
}

function Principle({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border-l border-neon/40 pl-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-neon">{n}</span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-pale-700">{children}</p>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
