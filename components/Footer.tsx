import Link from 'next/link';
import { categories } from '@/data/products';

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-pale-300/30 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-lg font-bold tracking-tightest text-white">
              ELECTRONICS CATALOG
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-pale-700">
              「誰向け」ではなく「製品の種類」で電子製品を整理する目録サイト。
            </p>
            <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-pale-500">
              ◉ INDEX / {new Date().getFullYear()}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
            {categories.map(cat => (
              <div key={cat.id}>
                <Link
                  href={`/c/${cat.id}`}
                  className="text-sm font-semibold tracking-tightest text-white transition-colors hover:text-neon"
                >
                  <span className="mr-2 font-mono text-[10px] text-pale-500">[{cat.code}]</span>
                  {cat.name}
                </Link>
                <ul className="mt-3 space-y-2">
                  {cat.subCategories.map(sub => (
                    <li key={sub.code}>
                      <Link
                        href={`/c/${cat.id}/${sub.code.toLowerCase()}`}
                        className="text-xs text-pale-700 transition-colors hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-2 border-t border-pale-300/30 pt-6 font-mono text-[10px] uppercase tracking-widest text-pale-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Electronics Catalog</span>
          <span>Sorted by product type, not use case</span>
        </div>
      </div>
    </footer>
  );
}
