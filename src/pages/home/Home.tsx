import AboutUs from "./components/AboutUs";
import Agrimony from "./components/Agrimony";
import B2bBuyerPortal from "./components/B2bBuyerPortal";
import CommercialCropsandProduce from "./components/CommercialCropsandProduce";
import Contactus from "./components/Contactus";
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
      <B2bBuyerPortal />
      <Contactus />
    </div>
  );
}

export default Home;
