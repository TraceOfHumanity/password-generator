uniform float uTime;
uniform vec3 uColor;
uniform float uBaseAlpha;
uniform float uTwinkleStrength;
uniform float uTwinkleSpeed;
uniform vec3 uFogColor;
uniform float uFogDensity;

varying float vPhase;
varying float vDepth;

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float d = length(uv);
  if (d > 0.5) discard;

  float star = smoothstep(0.5, 0.0, d);
  float twinkle = 0.5 + 0.5 * sin(uTime * uTwinkleSpeed + vPhase);
  float alpha = star * (uBaseAlpha + twinkle * uTwinkleStrength);
  float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * vDepth * vDepth);
  vec3 color = mix(uColor, uFogColor, fogFactor);
  alpha *= 1.0 - fogFactor;

  gl_FragColor = vec4(color, alpha);
}
