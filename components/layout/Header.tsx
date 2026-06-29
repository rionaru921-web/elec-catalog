'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import CommandMenu from './CommandMenu';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(
      typeof navigator !== 'undefined' &&
        navigator.platform.toLowerCase().includes('mac')
    );

    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(o => !o);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 h-16 border-b border-neon/20 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
          {/* LOGO */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <span className="text-xl text-neon transition-transform group-hover:scale-110 glow-soft">
              ◉
            </span>
            <span className="font-mono text-sm font-bold tracking-widest text-white transition-colors group-hover:text-neon">
              CATALOG
            </span>
            <span className="hidden font-mono text-[10px] tracking-widest text-pale-500 md:inline">
              v1.0
            </span>
          </Link>

          {/* NAV + SEARCH */}
          <div className="flex items-center gap-2 md:gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {[
                { href: '/', label: 'Home' },
                { href: '/catalog', label: 'Index' },
                { href: '/about', label: 'About' }
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-mono text-xs uppercase tracking-widest text-pale-700 transition-colors hover:text-neon"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* SEARCH TRIGGER */}
            <button
              onClick={() => setOpen(true)}
              className="group flex items-center gap-3 rounded-full border border-neon/30 px-3 py-1.5 transition-colors hover:border-neon"
              aria-label="Open search"
            >
              <span className="text-xs text-neon">⌕</span>
              <span className="hidden font-mono text-xs text-pale-700 transition-colors group-hover:text-neon sm:inline">
                Search products...
              </span>
              <kbd className="hidden rounded border border-pale-400/30 px-1.5 py-0.5 font-mono text-[10px] text-pale-500 sm:inline">
                {isMac ? '⌘' : 'Ctrl'}K
              </kbd>
            </button>
          </div>
        </div>
      </header>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
}
