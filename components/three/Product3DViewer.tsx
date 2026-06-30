'use client';

import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/useReducedMotion';

// ================================================================
// Types
// ================================================================
type ProductStatus = 'current' | 'discontinued' | 'limited' | 'pre-order';

interface Product3DViewerProps {
  imageUrl: string;
  status?: ProductStatus;
  productCode: string;
  className?: string;
}

// ================================================================
// Status badge config
// ================================================================
const STATUS_CFG: Record<string, { label: string; color: string; pulse: boolean }> = {
  current:      { label: '● CURRENT',   color: '#00FF95', pulse: false },
  discontinued: { label: '○ DISC.',     color: '#6B6B73', pulse: false },
  limited:      { label: '◈ LIMITED',   color: '#e879f9', pulse: false },
  'pre-order':  { label: '◎ PRE-ORDER', color: '#fde047', pulse: true  }
};

// ================================================================
// ホログラム板（メイン）
// ================================================================
function HologramPlate({
  imageUrl,
  isInteracting,
}: {
  imageUrl: string;
  isInteracting: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imageUrl);
  const reduced = useReducedMotion();

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);

  const materials = useMemo(() => {
    // 側面: 強発光メタリックエッジ
    const sideMat = new THREE.MeshStandardMaterial({
      color: '#00FF95',
      emissive: '#00FF95',
      emissiveIntensity: 0.6,
      metalness: 0.95,
      roughness: 0.15,
    });
    // 前面: 画像 + 軽いネオングロウ
    const frontMat = new THREE.MeshStandardMaterial({
      map: texture,
      emissive: '#00FF95',
      emissiveIntensity: 0.04,
      metalness: 0.2,
      roughness: 0.4,
    });
    // 背面: ネオン強発光
    const backMat = new THREE.MeshStandardMaterial({
      color: '#0a0a0a',
      emissive: '#00FF95',
      emissiveIntensity: 0.5,
      metalness: 0.6,
      roughness: 0.3,
    });
    // 順序: [+X右, -X左, +Y上, -Y下, +Z前, -Z後]
    return [sideMat, sideMat, sideMat, sideMat, frontMat, backMat];
  }, [texture]);

  useEffect(() => {
    return () => { materials.forEach(m => m.dispose()); };
  }, [materials]);

  useFrame((state, delta) => {
    if (reduced || !meshRef.current) return;
    if (!isInteracting) {
      meshRef.current.rotation.y += delta * 0.3;
    }
    // 微妙なふわふわ感（ホバー演出）
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.06;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <mesh ref={meshRef} material={materials}>
      <boxGeometry args={[3.5, 3.5, 0.18]} />
    </mesh>
  );
}

// ================================================================
// ホログラムオーラ（板の周囲の透明な発光枠2層）
// ================================================================
function HologramAura({ isInteracting }: { isInteracting: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  useFrame((_, delta) => {
    if (reduced || isInteracting || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* 内側オーラ */}
      <mesh>
        <boxGeometry args={[3.85, 3.85, 0.02]} />
        <meshBasicMaterial
          color="#00FF95"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* 外側オーラ */}
      <mesh position={[0, 0, -0.08]}>
        <boxGeometry args={[4.3, 4.3, 0.02]} />
        <meshBasicMaterial
          color="#00FF95"
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

// ================================================================
// 浮遊パーティクル（板の周囲を旋回）
// ================================================================
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);
  const reduced = useReducedMotion();

  const positions = useMemo(() => {
    const COUNT = 60;
    const arr = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const angle = (i / COUNT) * Math.PI * 2 + Math.random() * 0.3;
      const r = 2.7 + Math.random() * 1.8;
      arr[i * 3] = Math.cos(angle) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      arr[i * 3 + 2] = Math.sin(angle) * r;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (reduced || !ref.current) return;
    ref.current.rotation.y -= delta * 0.1; // 板と逆方向にゆっくり
  });

  if (reduced) return null;

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#00FF95"
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ================================================================
// 反射リング（板の下、展示台風）
// ================================================================
function FloorRing() {
  return (
    <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {/* 外周リング */}
      <mesh>
        <ringGeometry args={[1.8, 2.1, 64]} />
        <meshBasicMaterial
          color="#00FF95"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      {/* 内周リング（薄め） */}
      <mesh position={[0, 0, 0.01]}>
        <ringGeometry args={[1.2, 1.5, 64]} />
        <meshBasicMaterial
          color="#00FF95"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// ================================================================
// シーン
// ================================================================
function Scene({
  imageUrl,
  isInteracting,
}: {
  imageUrl: string;
  isInteracting: boolean;
}) {
  return (
    <>
      {/* 環境光（控えめ） */}
      <ambientLight intensity={0.25} />

      {/* 上からの白スポット（ショーケース風） */}
      <pointLight position={[0, 6, 3]} color="#ffffff" intensity={1.6} />
      <pointLight position={[0, 3, 5]} color="#ffffff" intensity={0.8} />

      {/* 4方向のネオンリムライト */}
      <pointLight position={[5, 0, 0]} color="#00FF95" intensity={1.0} />
      <pointLight position={[-5, 0, 0]} color="#00FF95" intensity={1.0} />
      <pointLight position={[0, 0, -5]} color="#00FF95" intensity={0.8} />
      <pointLight position={[0, -3, 2]} color="#00FF95" intensity={0.5} />

      <HologramPlate imageUrl={imageUrl} isInteracting={isInteracting} />
      <HologramAura isInteracting={isInteracting} />
      <FloatingParticles />
      <FloorRing />
    </>
  );
}

// ================================================================
// ローディング
// ================================================================
function LoadingFallback() {
  return (
    <Html center>
      <div className="animate-pulse font-mono text-xs tracking-[0.3em] text-neon">
        LOADING HOLOGRAM...
      </div>
    </Html>
  );
}

// ================================================================
// HTML: 4隅コーナーブラケット
// ================================================================
function CornerBracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const cls = {
    tl: 'top-2 left-2 border-t border-l',
    tr: 'top-2 right-2 border-t border-r',
    bl: 'bottom-2 left-2 border-b border-l',
    br: 'bottom-2 right-2 border-b border-r',
  };
  return (
    <span
      className={`pointer-events-none absolute z-10 h-5 w-5 border-neon ${cls[pos]}`}
      aria-hidden
    />
  );
}

// ================================================================
// メインコンポーネント
// ================================================================
export function Product3DViewer({
  imageUrl,
  status,
  productCode,
  className = '',
}: Product3DViewerProps) {
  const [isInteracting, setIsInteracting] = useState(false);
  const cfg = STATUS_CFG[status ?? 'current'] ?? STATUS_CFG.current;

  return (
    <div
      className={`relative aspect-square w-full overflow-hidden border border-neon/20 bg-black ${className}`}
    >
      {/* 4隅コーナーブラケット */}
      <CornerBracket pos="tl" />
      <CornerBracket pos="tr" />
      <CornerBracket pos="bl" />
      <CornerBracket pos="br" />

      {/* HUD: 左上 */}
      <div className="absolute left-3 top-3 z-20 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-neon">
        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
        HOLOGRAM
      </div>

      {/* StatusBadge: 右上 */}
      <div
        className="pointer-events-none absolute right-3 top-3 z-20 rounded-full border bg-black/80 px-3 py-1 font-mono text-[10px] tracking-widest backdrop-blur-sm"
        style={{
          color: cfg.color,
          borderColor: `${cfg.color}55`,
          ...(cfg.pulse ? { animation: 'pulse 2s ease-in-out infinite' } : {}),
        }}
      >
        {cfg.label}
      </div>

      {/* HUD: 左下 */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-20 font-mono text-[10px] tracking-[0.2em] text-zinc-500">
        ID: {productCode.toUpperCase()}
      </div>

      {/* HUD: 右下 */}
      <div className="pointer-events-none absolute bottom-3 right-3 z-20 font-mono text-[10px] tracking-[0.2em] text-zinc-500">
        DRAG · SCROLL
      </div>

      {/* スキャンライン */}
      <div
        className="pointer-events-none absolute inset-0 z-10 mix-blend-screen opacity-25"
        style={{
          background:
            'repeating-linear-gradient(0deg, rgba(0,255,149,0.05) 0px, rgba(0,255,149,0.05) 1px, transparent 1px, transparent 3px)',
        }}
      />

      {/* 中央ビネット（深度感） */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        onPointerDown={() => setIsInteracting(true)}
        onPointerUp={() => setIsInteracting(false)}
        onPointerLeave={() => setIsInteracting(false)}
      >
        <Suspense fallback={<LoadingFallback />}>
          <Scene imageUrl={imageUrl} isInteracting={isInteracting} />
        </Suspense>
        <OrbitControls
          enableZoom
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          rotateSpeed={0.8}
          zoomSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}

export default Product3DViewer;
