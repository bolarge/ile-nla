import { assets } from "../../../assets/assets";
import HeroMetricsOverlay from "./HeroMetricsOverlay";
import HeroMetricsStacked from "./HeroMetricsStacked";
import HeroText from "./HeroText";

function Hero() {
  return (
    <>
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={assets.hero}
          alt="plantation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <HeroText />
        </div>
        <HeroMetricsOverlay />
      </section>
      <HeroMetricsStacked />
    </>
  );
}

export default Hero;
