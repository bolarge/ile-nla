import AboutUs from "./components/AboutUs";
import CommercialCropsandProduce from "./components/CommercialCropsandProduce";
import CoreValues from "./components/CoreValues";
import Hero from "./components/Hero";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <CoreValues />
      <AboutUs />
      <CommercialCropsandProduce />
    </div>
  );
}

export default Home;
