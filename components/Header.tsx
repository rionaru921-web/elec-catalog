import Link from 'next/link';
import { categories } from '@/data/products';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-pale-300/40 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative grid h-8 w-8 place-items-center border border-neon glow-box">
            <span className="font-mono text-[10px] font-bold tracking-widest text-neon glow-soft">EC</span>
            <span className="absolute -inset-0.5 -z-10 bg-neon/10 blur-md" />
          </div>
          <div className="leading-none">
            <div className="text-[15px] font-semibold tracking-tightest text-white">
              ELECTRONICS CATALOG
            </div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-pale-700">
              by product type
            </div>
          </div>
        </Link>

        <nav className="hidden gap-7 md:flex">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/c/${cat.id}`}
              className="group text-sm text-pale-700 transition-colors hover:text-neon"
            >
              <span className="mr-2 font-mono text-[10px] text-pale-500 group-hover:text-neon/70">
                [{cat.code}]
              </span>
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
