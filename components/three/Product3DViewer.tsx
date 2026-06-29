'use client';

import { useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useReducedMotion } from '@/lib/useReducedMotion';
import * as THREE from 'three';

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
// 3D: loading wireframe (shown while texture loads)
// ================================================================
function LoadingBox() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.4;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[3.5, 3.5, 0.2]} />
      <meshBasicMaterial color="#00FF95" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

// ================================================================
// 3D: thin product box — image on front face only
// ================================================================
function ProductBox({
  imageUrl,
  autoRotateRef
}: {
  imageUrl: string;
  autoRotateRef: React.MutableRefObject<boolean>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();
  const texture = useTexture(imageUrl);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  // Six face materials: right/left/top/bottom/front/back
  const materials = useMemo(() => {
    const edge = new THREE.MeshStandardMaterial({ color: '#101015', roughness: 0.5, metalness: 0.65 });
    const back = new THREE.MeshStandardMaterial({ color: '#030305', roughness: 0.7 });
    const front = new THREE.MeshStandardMaterial({ roughness: 0.15, metalness: 0.05 });
    front.map = texture;
    return [edge, edge, edge, edge, front, back];
  }, [texture]);

  useEffect(() => {
    return () => { materials.forEach(m => m.dispose()); };
  }, [materials]);

  useFrame((_, delta) => {
    if (reduced || !autoRotateRef.current || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.3;
  });

  return (
    <group ref={groupRef}>
      <mesh material={materials}>
        <boxGeometry args={[3.5, 3.5, 0.2]} />
      </mesh>
    </group>
  );
}

// ================================================================
// HTML: corner bracket overlay
// ================================================================
function CornerBracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const cls = {
    tl: 'top-4 left-4 border-t-2 border-l-2',
    tr: 'top-4 right-4 border-t-2 border-r-2',
    bl: 'bottom-4 left-4 border-b-2 border-l-2',
    br: 'bottom-4 right-4 border-b-2 border-r-2'
  };
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-[#00FF95] ${cls[pos]}`}
      aria-hidden
    />
  );
}

// ================================================================
// Main exported component
// ================================================================
export function Product3DViewer({
  imageUrl,
  status,
  productCode,
  className = ''
}: Product3DViewerProps) {
  const autoRotateRef = useRef<boolean>(true);
  const cfg = STATUS_CFG[status ?? 'current'] ?? STATUS_CFG.current;

  return (
    <div
      className={`relative aspect-square overflow-hidden bg-[#08080B] ${className}`}
      onPointerDown={() => { autoRotateRef.current = false; }}
      onPointerUp={() => { autoRotateRef.current = true; }}
      onPointerLeave={() => { autoRotateRef.current = true; }}
    >
      {/* ── 3D Canvas ── */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: false, antialias: true }}
        dpr={[1, 1.5]}
        style={{ background: '#08080B' }}
      >
        <color attach="background" args={['#08080B']} />

        {/* Lighting: neon green rim + white fill */}
        <ambientLight intensity={0.5} />
        <spotLight position={[4, 4, 4]} color="#00FF95" intensity={2.0} penumbra={0.6} />
        <directionalLight position={[-3, 2, 5]} color="#ffffff" intensity={0.8} />
        <pointLight position={[-4, -3, 3]} color="#00FF95" intensity={0.4} />

        <Suspense fallback={<LoadingBox />}>
          <ProductBox imageUrl={imageUrl} autoRotateRef={autoRotateRef} />
        </Suspense>

        <OrbitControls
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          enableDamping
          dampingFactor={0.08}
        />
      </Canvas>

      {/* ── Corner brackets ── */}
      <CornerBracket pos="tl" />
      <CornerBracket pos="tr" />
      <CornerBracket pos="bl" />
      <CornerBracket pos="br" />

      {/* ── HUD ── */}
      <div
        className="pointer-events-none absolute left-4 top-11 font-mono text-[10px] uppercase tracking-widest text-[#00FF95]"
        style={{ textShadow: '0 0 8px rgba(0,255,149,0.5)' }}
      >
        ● 3D VIEW
      </div>
      <div className="pointer-events-none absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[#6B6B73]">
        ID: {productCode.toUpperCase()}
      </div>
      <div className="pointer-events-none absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widest text-[#6B6B73]">
        DRAG · SCROLL
      </div>

      {/* ── Status badge ── */}
      <div
        className="pointer-events-none absolute right-4 top-4 rounded-full border bg-black/80 px-3 py-1 font-mono text-[10px] tracking-widest backdrop-blur-sm"
        style={{
          color: cfg.color,
          borderColor: `${cfg.color}55`,
          ...(cfg.pulse ? { animation: 'pulse 2s ease-in-out infinite' } : {})
        }}
      >
        {cfg.label}
      </div>

      {/* ── Scanline CRT overlay ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(180deg,transparent 0,transparent 3px,rgba(0,255,149,0.018) 3px,rgba(0,255,149,0.018) 4px)'
        }}
        aria-hidden
      />
    </div>
  );
}

export default Product3DViewer;
