import {Canvas, useFrame} from '@react-three/fiber';
import {useMemo, useRef} from 'react';
import * as THREE from 'three';

const WavesPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);

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

  useFrame(({clock}) => {
    const t = clock.getElapsedTime() * 0.5;

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
  });

  return (
    <points
      ref={pointsRef}
      rotation-x={-Math.PI / 2}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          args={[animated, 3]}
          count={(widthSegments + 1) * (heightSegments + 1)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color='#33ff99'
        size={0.03}
        sizeAttenuation
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
      <fogExp2
        attach='fog'
        args={['#020408', 0.06]}
      />
      <ambientLight intensity={0.6} />
      <WavesPoints />
    </Canvas>
  );
};

export default Background;
