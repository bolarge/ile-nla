import AboutUs from "./components/AboutUs";
import Agrimony from "./components/Agrimony";
import CommercialCropsandProduce from "./components/CommercialCropsandProduce";
import CoreValues from "./components/CoreValues";
import Hero from "./components/Hero";
import InvestorsandStakeHolder from "./components/InvestorsandStakeHolder";
import IrrigationSystemFlow from "./components/IrrigationSystemFlow";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CoreValues />
      <AboutUs />
      <CommercialCropsandProduce />
      <Agrimony />
      <IrrigationSystemFlow />
      <InvestorsandStakeHolder />
    </div>
  );
}

export default Home;
