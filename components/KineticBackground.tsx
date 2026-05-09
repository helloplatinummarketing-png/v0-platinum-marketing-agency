"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const SHADER_DATA = {
  vertexShader: `
    varying vec2 vUv;
    uniform float uTime;
    uniform vec2 uCursor;
    uniform float uRipple;

    void main() {
      vUv = uv;
      vec3 pos = position;

      float dist = distance(uv, uCursor);
      float warp = smoothstep(0.5, 0.0, dist) * 0.35;
      pos.z += warp;

      float rippleTime = mod(uRipple, 5.0);
      float rippleDist = distance(uv, vec2(0.5));
      float wave = sin(rippleDist * 35.0 - rippleTime * 12.0) * 0.05;
      float waveBounds = smoothstep(0.15, 0.0, abs(rippleDist - rippleTime * 0.45));
      pos.z += wave * waveBounds;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform vec3 uColor;
    uniform float uOpacity;

    void main() {
      float lineThickness = 0.015;
      float gridX = step(1.0 - lineThickness, fract(vUv.x * 20.0));
      float gridY = step(1.0 - lineThickness, fract(vUv.y * 20.0));
      float strength = max(gridX, gridY);

      if (strength < 0.1) discard;
      gl_FragColor = vec4(uColor, uOpacity * strength);
    }
  `,
};

const DataPackets = ({ count = 80 }: { count?: number }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const packets = useMemo(() => {
    return Array.from({ length: count }, () => ({
      t: Math.random() * 100,
      speed: 0.001 + Math.random() * 0.004,
      coord: Math.floor(Math.random() * 20) / 20,
      isVertical: Math.random() > 0.5,
    }));
  }, [count]);

  useFrame(() => {
    if (!meshRef.current) return;

    packets.forEach((p, i) => {
      p.t += p.speed;
      const progress = (p.t % 1.0) * 10 - 5;
      const fixed = p.coord * 10 - 5;

      if (p.isVertical) {
        dummy.position.set(fixed, progress, 0.05);
      } else {
        dummy.position.set(progress, fixed, 0.05);
      }

      dummy.scale.setScalar(0.022);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, count]}
      frustumCulled={false}
    >
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color={0xd4af37} transparent opacity={0.5} />
    </instancedMesh>
  );
};

const WarpingGrid = ({ opacityScale = 1 }: { opacityScale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uCursor: { value: new THREE.Vector2(0.5, 0.5) },
        uRipple: { value: 0 },
        uColor: { value: new THREE.Color(0xd4af37) },
        uOpacity: { value: 0.06 * opacityScale },
      },
      vertexShader: SHADER_DATA.vertexShader,
      fragmentShader: SHADER_DATA.fragmentShader,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }, [opacityScale]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    material.uniforms.uTime.value = t;
    material.uniforms.uRipple.value = t;

    material.uniforms.uCursor.value.x = THREE.MathUtils.lerp(
      material.uniforms.uCursor.value.x,
      (mouse.x + 1) / 2,
      0.07
    );
    material.uniforms.uCursor.value.y = THREE.MathUtils.lerp(
      material.uniforms.uCursor.value.y,
      (mouse.y + 1) / 2,
      0.07
    );
  });

  return (
    <mesh
      ref={meshRef}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, -0.5]}
      material={material}
    >
      <planeGeometry
        args={[viewport.width * 2.5, viewport.height * 2.5, 100, 100]}
      />
    </mesh>
  );
};

interface KineticBackgroundProps {
  opacityScale?: number;
  packetCount?: number;
}

export default function KineticBackground({
  opacityScale = 1,
  packetCount = 80,
}: KineticBackgroundProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <WarpingGrid opacityScale={opacityScale} />
      <DataPackets count={packetCount} />
    </Canvas>
  );
}
