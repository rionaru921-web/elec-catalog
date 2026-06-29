'use client';

import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useMemo } from 'react';
import { products } from '@/data/products';
import { categories } from '@/data/categories';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const itemCls =
  'flex items-center gap-3 px-3 py-2 rounded-sm text-sm text-pale-700 cursor-pointer transition-colors ' +
  'aria-selected:bg-neon/10 aria-selected:text-neon aria-selected:border-l-2 aria-selected:border-neon aria-selected:pl-[10px]';

const groupCls =
  '[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:text-pale-500 ' +
  '[&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest ' +
  '[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-2';

export default function CommandMenu({ open, setOpen }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!open) setSearch('');
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const brands = useMemo(
    () => Array.from(new Set(products.map(p => p.brand))).sort(),
    []
  );

  const go = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[12vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="cmdk-panel w-full max-w-2xl overflow-hidden rounded-lg border border-neon/40 bg-void-950 shadow-2xl shadow-neon/10"
        onClick={e => e.stopPropagation()}
      >
        <Command label="Command Menu" className="font-mono" shouldFilter>
          {/* ===== INPUT ===== */}
          <div className="flex items-center border-b border-neon/20 px-4">
            <span className="mr-3 text-sm text-neon">⌕</span>
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search products, brands, type codes..."
              className="h-14 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-pale-500"
              autoFocus
            />
            <kbd
              className="ml-2 shrink-0 cursor-pointer rounded border border-pale-400/30 px-1.5 py-0.5 font-mono text-[10px] text-pale-500 hover:text-neon"
              onClick={() => setOpen(false)}
            >
              ESC
            </kbd>
          </div>

          {/* ===== RESULTS ===== */}
          <Command.List className="max-h-[60vh] overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center font-mono text-xs uppercase tracking-widest text-pale-500">
              No results found for &quot;{search}&quot;
            </Command.Empty>

            {/* JUMP TO */}
            <Command.Group heading="JUMP TO" className={groupCls}>
              <Command.Item value="home jump" onSelect={() => go('/')} className={itemCls}>
                <span className="text-neon">◉</span>
                <span>Home</span>
              </Command.Item>
              <Command.Item value="catalog index type code" onSelect={() => go('/catalog')} className={itemCls}>
                <span className="text-neon">◉</span>
                <span>Type Code Index</span>
              </Command.Item>
              <Command.Item value="about manifesto philosophy why design concept" onSelect={() => go('/about')} className={itemCls}>
                <span className="text-neon">◉</span>
                <span>About / Manifesto</span>
              </Command.Item>
            </Command.Group>

            {/* CATEGORIES */}
            <Command.Group heading="CATEGORIES" className={groupCls}>
              {categories.map(cat => (
                <Command.Item
                  key={cat.id}
                  value={`${cat.code} ${cat.name} ${cat.nameEn}`}
                  onSelect={() => go(`/c/${cat.id}`)}
                  className={itemCls}
                >
                  <span className="w-12 shrink-0 font-mono text-xs text-neon">[{cat.code}]</span>
                  <span className="text-white">{cat.name}</span>
                  <span className="ml-auto text-xs text-pale-500">{cat.nameEn}</span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* TYPE CODES */}
            <Command.Group heading="TYPE CODES" className={groupCls}>
              {categories.flatMap(cat =>
                cat.subCategories.map(sub => (
                  <Command.Item
                    key={sub.code}
                    value={`${sub.code} ${sub.name} ${sub.description ?? ''}`}
                    onSelect={() => go(`/c/${cat.id}#${sub.code}`)}
                    className={itemCls}
                  >
                    <span className="w-16 shrink-0 font-mono text-xs text-neon">{sub.code}</span>
                    <span>{sub.name}</span>
                  </Command.Item>
                ))
              )}
            </Command.Group>

            {/* PRODUCTS */}
            <Command.Group heading="PRODUCTS" className={groupCls}>
              {products.map(p => (
                <Command.Item
                  key={p.id}
                  value={`${p.name} ${p.brand} ${p.typeCode} ${p.tags.join(' ')}`}
                  onSelect={() => go(`/products/${p.id}`)}
                  className={itemCls}
                >
                  <span className="w-16 shrink-0 font-mono text-[10px] text-neon">{p.typeCode}</span>
                  <span className="flex-1 truncate">{p.name}</span>
                  <span className="ml-2 shrink-0 text-xs text-pale-500">{p.brand}</span>
                </Command.Item>
              ))}
            </Command.Group>

            {/* BRANDS */}
            <Command.Group heading="BRANDS" className={groupCls}>
              {brands.map(brand => {
                const count = products.filter(p => p.brand === brand).length;
                return (
                  <Command.Item
                    key={brand}
                    value={`brand-${brand}`}
                    onSelect={() => setSearch(brand)}
                    className={itemCls}
                  >
                    <span className="text-pale-500">○</span>
                    <span>{brand}</span>
                    <span className="ml-auto text-xs text-pale-500">{count} items</span>
                  </Command.Item>
                );
              })}
            </Command.Group>
          </Command.List>

          {/* ===== FOOTER ===== */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-neon/20 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-pale-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-pale-400/30 px-1 font-sans">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-pale-400/30 px-1 font-sans">↵</kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded border border-pale-400/30 px-1 font-sans">ESC</kbd>
                Close
              </span>
            </div>
            <span>{products.length} items</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
