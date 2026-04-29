attribute float aPhase;

uniform float uSize;

varying float vPhase;

void main() {
  vPhase = aPhase;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uSize * (20.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
