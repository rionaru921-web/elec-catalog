import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-xs text-pale-500">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="uppercase tracking-widest transition-colors hover:text-neon"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`uppercase tracking-widest ${isLast ? 'text-neon' : ''}`}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="text-pale-400">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
