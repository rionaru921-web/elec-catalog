import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <div className="font-mono text-sm text-neon glow-soft">[ERR_404]</div>
        <h1 className="mt-4 text-5xl font-black tracking-tightest text-white">
          NOT FOUND <span className="text-neon">◉</span>
        </h1>
        <p className="mt-4 font-mono text-sm text-pale-500">
          REQUESTED PRODUCT ID DOES NOT EXIST IN DATABASE.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block border border-neon/40 px-6 py-3 font-mono text-sm uppercase tracking-widest text-neon transition-colors hover:bg-neon/10"
        >
          ← Return Home
        </Link>
      </div>
    </div>
  );
}
