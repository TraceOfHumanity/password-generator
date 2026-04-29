import {Canvas, useFrame} from '@react-three/fiber';
import {useMemo, useRef} from 'react';
import * as THREE from 'three';
import fragmentShader from './shaders/waves-points.frag.glsl';
import vertexShader from './shaders/waves-points.vert.glsl';

const WavesPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const {base, widthSegments, heightSegments} = useMemo(() => {
    const width = 50;
    const height = 30;
    const widthSegments = 180;
    const heightSegments = 180;

    const geometry = new THREE.PlaneGeometry(
      width,
      height,
      widthSegments,
      heightSegments,
    );
    const base = new Float32Array(geometry.attributes.position.array);
    geometry.dispose();

    return {base, widthSegments, heightSegments};
  }, []);

  const animated = useMemo(() => new Float32Array(base), [base]);
  const phaseArray = useMemo(() => {
    const count = (widthSegments + 1) * (heightSegments + 1);
    const phases = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      phases[i] = Math.random() * Math.PI * 2;
    }
    return phases;
  }, [heightSegments, widthSegments]);

  useFrame(({clock}) => {
    const elapsedTime = clock.getElapsedTime();
    const t = elapsedTime * 0.5;

    for (let i = 0; i < animated.length; i += 3) {
      const x = base[i];
      const y = base[i + 1];

      const wave1 = Math.sin(x * 0.55 + t) * 0.35;
      const wave2 = Math.cos(y * 0.7 + t * 1.2) * 0.25;
      const wave3 = Math.sin((x + y) * 0.35 + t * 0.8) * 0.2;

      animated[i] = x;
      animated[i + 1] = y;
      animated[i + 2] = wave1 + wave2 + wave3;
    }

    const points = pointsRef.current;
    if (!points) return;

    const attr = points.geometry.getAttribute(
      'position',
    ) as THREE.BufferAttribute;
    attr.array = animated;
    attr.needsUpdate = true;

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = elapsedTime;
    }
  });

  return (
    <points
      ref={pointsRef}
      rotation-x={-Math.PI / 2.2}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          args={[animated, 3]}
          count={(widthSegments + 1) * (heightSegments + 1)}
          itemSize={3}
        />
        <bufferAttribute
          attach='attributes-aPhase'
          args={[phaseArray, 1]}
          count={(widthSegments + 1) * (heightSegments + 1)}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uTime: {value: 0},
          uColor: {value: new THREE.Color('#66ffcc')},
          uBaseAlpha: {value: 0.35},
          uTwinkleStrength: {value: 0.65},
          uTwinkleSpeed: {value: 2.2},
          uSize: {value: 3.0},
          uFogColor: {value: new THREE.Color('#020408')},
          uFogDensity: {value: 0.05},
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </points>
  );
};

const Background = () => {
  return (
    <Canvas camera={{position: [0, 6, 10], fov: 50, near: 0.1, far: 120}}>
      <color
        attach='background'
        args={['#020408']}
      />
 
      <ambientLight intensity={0.6} />
      <WavesPoints />
    </Canvas>
  );
};

export default Background;
