import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { products, getProductById, getRelatedProducts } from '@/data/products';
import { getCategoryById, getSubCategory } from '@/data/categories';
import dynamic from 'next/dynamic';
import Card3D from '@/components/ui/Card3D';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TypeCodeBadge from '@/components/ui/TypeCodeBadge';

const Product3DViewer = dynamic(
  () => import('@/components/three/Product3DViewer').then(m => ({ default: m.Product3DViewer })),
  { ssr: false }
);

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductById(params.id);
  if (!product) {
    return {
      title: "Not Found | ELECTRONICS",
      description: "指定された製品は見つかりませんでした。",
    };
  }

  const statusLabel: Record<string, string> = {
    current: "現行モデル",
    "pre-order": "予約受付中",
    limited: "限定モデル",
    discontinued: "生産終了",
  };

  const status = product.status ?? "current";
  const description = `${product.brand} ${product.name}（${product.typeCode}）${statusLabel[status]} - ${product.description.slice(0, 80)}`;

  return {
    title: `${product.name} | ${product.typeCode} | ELECTRONICS`,
    description,
    keywords: [
      product.name,
      product.brand,
      product.typeCode,
      ...product.tags,
      "電子機器カタログ",
      "elec-catalog",
      "ELECTRONICS",
    ],
    openGraph: {
      title: `${product.name} | ${product.typeCode}`,
      description,
      images: [{ url: product.imageUrl, width: 800, height: 800, alt: product.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${product.typeCode}`,
      description,
      images: [product.imageUrl],
    },
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductById(params.id);
  if (!product) notFound();

  const category = getCategoryById(product.category);
  const subCategory = getSubCategory(product.subCategoryCode);
  const related = getRelatedProducts(product.id, 4);

  const priceDisplay = product.priceText ?? `¥${product.price.toLocaleString()}`;

  return (
    <div className="relative">
      {/* ==================== BREADCRUMB ==================== */}
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-6">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: category?.nameEn ?? category?.name ?? '', href: `/c/${category?.id}` },
            {
              label: subCategory?.name ?? '',
              href: `/c/${category?.id}/${product.subCategoryCode.toLowerCase()}`
            },
            { label: product.name }
          ]}
        />
      </div>

      {/* ==================== § 01 OVERVIEW ==================== */}
      <section className="relative mx-auto max-w-6xl overflow-hidden px-6 py-10">
        {/* Ghost typecode 背景 */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-4 -z-0 select-none font-mono font-black leading-none text-neon/[0.04]"
          style={{ fontSize: 'clamp(80px, 18vw, 280px)' }}
        >
          {product.typeCode}
        </div>

        <div className="relative z-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: 3D ビューアー */}
          <div>
            <Product3DViewer
              imageUrl={product.imageUrl}
              status={product.status}
              productCode={product.id}
            />
            {/* release date */}
            <div className="mt-4 font-mono text-xs text-pale-500">
              RELEASED:{' '}
              <span className="text-neon glow-soft">{product.releaseDate}</span>
            </div>
          </div>

          {/* RIGHT: 製品情報 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-neon">§ 01</span>
              <span className="font-mono text-sm uppercase tracking-widest text-pale-500">
                Overview
              </span>
            </div>

            <div className="font-mono text-xs uppercase tracking-widest text-pale-500">
              {product.brand}
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tightest text-white lg:text-5xl">
              {product.name}
            </h1>

            <div className="flex flex-wrap gap-2">
              <TypeCodeBadge code={product.typeCode} size="md" />
              <span className="border border-pale-300/30 px-3 py-1 font-mono text-xs text-pale-700 rounded-full">
                {subCategory?.name}
              </span>
            </div>

            <p className="leading-relaxed text-pale-700">{product.description}</p>

            <div className="border-t border-neon/20 pt-6">
              <div className="font-mono text-3xl font-bold text-neon glow-soft lg:text-4xl">
                {priceDisplay}
              </div>
              <div className="mt-2 font-mono text-xs text-pale-500">
                RELEASED: <span className="text-pale-900">{product.releaseDate}</span>
              </div>
            </div>

            {product.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {product.tags.map(tag => (
                  <span
                    key={tag}
                    className="border border-pale-300/20 bg-void-900 px-3 py-1 font-mono text-xs text-pale-500"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==================== § 02 SPEC ==================== */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-baseline gap-4 border-b border-pale-300/30 pb-4">
          <span className="font-mono text-sm text-neon glow-soft">§ 02</span>
          <h2 className="text-3xl font-bold tracking-tightest text-white lg:text-4xl">
            SPEC <span className="text-neon">◉</span>
          </h2>
        </div>
        <div className="border border-neon/20">
          {product.specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-[220px_1fr] md:gap-6 ${
                i % 2 === 0 ? 'bg-black' : 'bg-void-950'
              }`}
            >
              <div className="font-mono text-xs uppercase tracking-widest text-neon/80 md:py-1">
                {spec.label}
              </div>
              <div className="text-white">{spec.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== § 03 REF (関連製品) ==================== */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-16">
          <div className="mb-8 flex flex-wrap items-baseline gap-4 border-b border-pale-300/30 pb-4">
            <span className="font-mono text-sm text-neon glow-soft">§ 03</span>
            <h2 className="text-3xl font-bold tracking-tightest text-white lg:text-4xl">
              REF <span className="text-neon">◉</span>
            </h2>
            <span className="font-mono text-sm text-pale-500">
              SAME TYPE: {product.typeCode}
            </span>
          </div>

          <div className="grid gap-px border border-pale-300/30 bg-pale-300/30 sm:grid-cols-2 lg:grid-cols-4">
            {related.map(p => (
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
                      className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <TypeCodeBadge code={p.typeCode} variant="overlay" size="sm" className="absolute left-3 top-3" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-pale-500">
                      {p.brand}
                    </div>
                    <h4 className="mt-2 font-semibold leading-snug tracking-tightest text-white group-hover:text-neon">
                      {p.name}
                    </h4>
                    <div className="mt-auto pt-3 font-mono text-sm text-neon glow-soft">
                      {p.priceText ?? `¥${p.price.toLocaleString()}`}
                    </div>
                  </div>
                </Link>
              </Card3D>
            ))}
          </div>
        </section>
      )}

      {/* ==================== 戻るリンク ==================== */}
      <section className="mx-auto max-w-6xl border-t border-pale-300/30 px-6 py-12">
        <Link
          href={`/c/${category?.id}`}
          className="group inline-flex items-center gap-3 font-mono text-sm text-pale-500 transition-colors hover:text-neon"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          <span className="uppercase tracking-widest">
            View All {category?.nameEn ?? category?.name}
          </span>
        </Link>
      </section>
    </div>
  );
}

