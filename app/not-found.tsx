"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center px-6 overflow-hidden">
      {/* 4隅コーナーブラケット */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-neon" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-neon" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-neon" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-neon" />

      {/* 上部HUD */}
      <div className="absolute top-8 left-8 flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-neon">
        <span className="inline-block w-1.5 h-1.5 bg-neon rounded-full animate-pulse" />
        ERROR
      </div>
      <div className="absolute top-8 right-8 font-mono text-xs tracking-[0.3em] text-zinc-500">
        STATUS: 404
      </div>

      {/* 中央 */}
      <div className="text-center relative z-10">
        <div className="text-[180px] md:text-[280px] font-bold text-neon leading-none font-mono tracking-tight">
          404
        </div>
        <div className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-4">
          NOT FOUND IN INDEX
        </div>
        <p className="text-zinc-500 text-sm mt-6 max-w-md mx-auto leading-relaxed">
          このタイプコードは存在しないか、移動された可能性があります。
          <br />
          ホームに戻って索引から探してみてください。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-6 py-3 border border-neon bg-neon/5 hover:bg-neon hover:text-black transition-all duration-300 font-mono text-sm tracking-[0.25em] text-neon"
          >
            <span>←</span>
            <span>RETURN TO HOME</span>
          </Link>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 hover:border-zinc-500 transition-all duration-300 font-mono text-sm tracking-[0.25em] text-zinc-400 hover:text-white"
          >
            <span>VIEW 3D CATALOG</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* 下部HUD */}
      <div className="absolute bottom-8 left-8 font-mono text-[10px] tracking-[0.2em] text-zinc-600">
        ELECTRONICS / CATALOG
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[10px] tracking-[0.2em] text-zinc-600">
        v2.0
      </div>
    </div>
  );
}
