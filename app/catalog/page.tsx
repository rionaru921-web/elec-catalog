'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { categories } from '@/data/categories';
import { products } from '@/data/products';
import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/useReducedMotion';

// ============================================================
// カテゴリ別アクセント色
// ============================================================
const CAT_COLORS: Record<string, string> = {
  pc: '#00FF95',
  sp: '#00D9FF',
  tb: '#FF00C8',
  au: '#FFD600',
  pr: '#FF6B00'
};

type FlatSub = {
  code: string;
  name: string;
  description: string;
  catId: string;
  catCode: string;
  catName: string;
  color: string;
  count: number;
};

// ============================================================
// フィボナッチ球面配置（N点を球面上に均等分散）
// ============================================================
function fibonacciSphere(count: number, radius: number): [number, number, number][] {
  const positions: [number, number, number][] = [];
  const phi = Math.PI * (Math.sqrt(5) - 1); // 黄金角
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    positions.push([Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius]);
  }
  return positions;
}

// ============================================================
// TypeCodeNode — 球面上の各カード
// ============================================================
function TypeCodeNode({ position, sub }: { position: [number, number, number]; sub: FlatSub }) {
  const [hover, setHover] = useState(false);

  return (
    <Html position={position} center distanceFactor={10} style={{ pointerEvents: 'auto' }} zIndexRange={[10, 0]}>
      <Link
        href={`/c/${sub.catId}#${sub.code}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="block w-36 px-3 py-2 bg-black/90 backdrop-blur-sm border transition-all duration-300 font-mono select-none"
        style={{
          borderColor: hover ? sub.color : `${sub.color}50`,
          boxShadow: hover
            ? `0 0 24px ${sub.color}, inset 0 0 12px ${sub.color}20`
            : `0 0 6px ${sub.color}30`,
          transform: hover ? 'scale(1.12)' : 'scale(1)'
        }}
      >
        <div className="text-[10px] tracking-[0.2em] font-bold" style={{ color: sub.color }}>
          {sub.catCode} / {sub.code}
        </div>
        <div className="text-sm text-white mt-1 leading-tight font-medium">
          {sub.name}
        </div>
        <div className="text-[9px] text-zinc-500 mt-1.5 tracking-[0.15em]">
          {sub.count} ITEMS
        </div>
      </Link>
    </Html>
  );
}

// ============================================================
// 外側の星雲パーティクル
// ============================================================
function StarField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const COUNT = 1200;
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 15 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ============================================================
// 中心のワイヤーフレーム球
// ============================================================
function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.1;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#0a0a0a"
        emissive="#00FF95"
        emissiveIntensity={0.6}
        wireframe
      />
    </mesh>
  );
}

// ============================================================
// メインページ
// ============================================================
export default function CatalogPage() {
  const reduced = useReducedMotion();
  const allSubs: FlatSub[] = useMemo(() =>
    categories.flatMap(cat =>
      cat.subCategories.map(sub => ({
        code: sub.code,
        name: sub.name,
        description: sub.description ?? '',
        catId: cat.id,
        catCode: cat.code,
        catName: cat.name,
        color: CAT_COLORS[cat.id] ?? '#00FF95',
        count: products.filter(p => p.subCategoryCode === sub.code).length
      }))
    ), []);

  const positions = useMemo(() => fibonacciSphere(allSubs.length, 7), [allSubs]);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden bg-black">
      {/* ==================== HUD: 左上 ==================== */}
      <div className="absolute left-6 top-6 z-30 pointer-events-none font-mono">
        <div className="flex items-center gap-2 text-[10px] tracking-[0.3em]" style={{ color: '#00FF95' }}>
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#00FF95]" />
          ELECTRONICS / CATALOG
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-6xl">
          {allSubs.length} TYPES
        </h1>
        <p className="mt-2 text-[11px] tracking-[0.2em] text-zinc-500">
          {categories.length} CATEGORIES · {products.length} PRODUCTS
        </p>
        <p className="mt-1 max-w-xs text-[10px] tracking-[0.15em] text-zinc-600">
          物理形状で索引された電子機器カタログ。<br />
          ノードをクリックして該当タイプへ。
        </p>
      </div>

      {/* ==================== HUD: 右上（レジェンド） ==================== */}
      <div className="absolute right-6 top-6 z-30 pointer-events-none space-y-1.5 font-mono text-xs">
        <div className="mb-2 text-[10px] tracking-[0.25em] text-zinc-500">LEGEND</div>
        {categories.map(cat => (
          <div key={cat.id} className="flex items-center gap-2.5">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: CAT_COLORS[cat.id], boxShadow: `0 0 8px ${CAT_COLORS[cat.id]}` }}
            />
            <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-300">{cat.code}</span>
            <span className="text-[10px] text-zinc-600">·</span>
            <span className="text-[10px] tracking-wider text-zinc-500">{cat.subCategories.length} TYPES</span>
          </div>
        ))}
      </div>

      {/* ==================== HUD: 左下（操作ヒント） ==================== */}
      <div className="absolute bottom-6 left-6 z-30 pointer-events-none font-mono text-[10px] tracking-[0.2em] text-zinc-500">
        <div>● DRAG TO ROTATE</div>
        <div className="mt-1">● SCROLL TO ZOOM</div>
        <div className="mt-1">● CLICK NODE TO ENTER</div>
      </div>

      {/* ==================== HUD: 右下 ==================== */}
      <div className="absolute bottom-6 right-6 z-30 pointer-events-none font-mono text-[10px] tracking-[0.2em] text-zinc-500">
        ◉ SPHERE VIEW · v2
      </div>

      {/* ==================== コーナーブラケット ==================== */}
      <div className="pointer-events-none absolute left-3 top-3 z-20 h-6 w-6 border-l border-t border-[#00FF95]/40" />
      <div className="pointer-events-none absolute right-3 top-3 z-20 h-6 w-6 border-r border-t border-[#00FF95]/40" />
      <div className="pointer-events-none absolute bottom-3 left-3 z-20 h-6 w-6 border-b border-l border-[#00FF95]/40" />
      <div className="pointer-events-none absolute bottom-3 right-3 z-20 h-6 w-6 border-b border-r border-[#00FF95]/40" />

      {/* ==================== 3D Canvas ==================== */}
      <Canvas
        camera={{ position: [0, 0, 16], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[15, 15, 15]} intensity={1.2} />
        <pointLight position={[-15, -15, 10]} color="#00FF95" intensity={0.6} />
        <pointLight position={[0, 0, -15]} color="#FF00C8" intensity={0.3} />

        <CoreSphere />

        {allSubs.map((sub, i) => (
          <TypeCodeNode key={sub.code} position={positions[i]} sub={sub} />
        ))}

        <StarField />

        <OrbitControls
          enableZoom
          enablePan={false}
          autoRotate={!reduced}
          autoRotateSpeed={0.3}
          minDistance={10}
          maxDistance={25}
          rotateSpeed={0.5}
          zoomSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
