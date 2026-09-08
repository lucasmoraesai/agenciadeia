import { Container } from "./container";
import Hyperspeed, { type HyperspeedOptions } from "./hyperspeed/Hyperspeed";

/**
 * Memoized at module level: Hyperspeed recreates the WebGL scene whenever
 * `effectOptions` identity changes, so it must stay a stable constant.
 */
const HYPERSPEED_OPTIONS: HyperspeedOptions = {
  distortion: "turbulentDistortion",
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 4,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [400 * 0.03, 400 * 0.2],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0xffffff,
    brokenLines: 0xffffff,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3
  }
};

export function HyperspeedSection() {
  return (
    <section id="velocidade" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Hyperspeed effectOptions={HYPERSPEED_OPTIONS} />
      </div>
      <Container className="relative flex flex-col items-center py-32 text-center sm:py-40">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Em alta velocidade
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
          Sua empresa no piloto automático.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          Horas ilimitadas, prazo de até 48h, sem contratar humanos.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#planos"
            className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Ver Plano
          </a>
        </div>
      </Container>
    </section>
  );
}
