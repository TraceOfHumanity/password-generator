attribute float aPhase;

uniform float uSize;

varying float vPhase;
varying float vDepth;

void main() {
  vPhase = aPhase;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vDepth = -mvPosition.z;
  gl_PointSize = uSize * (20.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
