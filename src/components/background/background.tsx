import {Canvas} from '@react-three/fiber';

const Background = () => {
  return (
    <Canvas className='w-screen h-screen!'>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color='red' />
      </mesh>
    </Canvas>
  );
};
export default Background;
