import { assets } from "../../../assets/assets";
import CropCatalog from "./CropCatalog";
import LandCards from "./LandCards";

function CommercialCropsandProduce() {
  return (
    <div className="w-full bg-white py-16 md:py-24 px-2">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <section>
          <p className="text-sub tracking-widest text-xs">
            COMMERCIAL CROPS & PRODUCE
          </p>
          <p className="text-darkgreen font-semibold text-[26px] md:text-[48px]">
            Farm-Fresh, Uniform Grade Fresh Produce.
          </p>
          <section className="w-full md:w-[50%]">
            <p>
              Our 10-acre farm is zoned to balance production volume, prolong
              harvest windows, and maintain consistent market availability.
            </p>
          </section>
        </section>
        <section>
          <p className="text-xs tracking-widest text-sub font-semibold pb-4">
            10-ACRE CROP ALLOCATION MAP
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-0.5">
            <LandCards
              className="lg:col-span-2 bg-[#B83C28]"
              header="4 Acres"
              description="Tomatoes (Cobra F1)"
            />
            <LandCards
              className="lg:col-span-2 bg-[#D45C14]"
              header="4 Acres"
              description="Habanero (Atarodo)"
            />
            <LandCards
              header="2 Acres"
              description="Cayenne (Shombo)"
              className="bg-[#7A2E10]"
            />
          </div>
          <section className="w-full bg-primary rounded-lg shadow-sm text-sm text-white h-12 flex items-center px-4 mt-2 lg:mt-0.5">
            <p>+ Nursery & Sorting Bay</p>
          </section>
        </section>
        <section className="w-full">
          <p className="text-xs tracking-widest text-sub pb-4">CROP CATALOG</p>
          <section className="w-full lg:w-[60%] grid grid-cols-3 gap-0.5">
            <CropCatalog
              title="1. Fresh Tomatoes"
              titlesub="1. Tomatoes"
              className="bg-primary text-white font-semibold"
            />
            <CropCatalog
              title="2. Habanero Pepper / Atarodo"
              titlesub="2. Habanero"
              className="bg-[#E8E2D6] text-textcat"
            />
            <CropCatalog
              title="3. Cayenne Pepper / Shombo"
              titlesub="3. Cayenne"
              className="bg-[#E8E2D6] text-textcat"
            />
          </section>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-center lg:gap-6">
            <div className="group w-full h-80 lg:rounded-b-2xl lg:rounded-tr-2xl  shadow-sm overflow-hidden ">
              <img
                src={assets.tomatoes}
                alt="icon"
                className="w-full h-full object-cover lg:rounded-b-2xl lg:rounded-tr-2xl animate-slow-zoom"
              />
            </div>
            <div className="w-full col-span-2 space-y-8 pt-6 lg:pt-0">
              <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between">
                <section className="space-y-1 w-full">
                  <p className="text-lg font-semibold">Fresh Tomatoes</p>
                  <p className="text-xs">Cobra F1 Hybrid</p>
                </section>
                <section className="w-full flex items-center justify-between text-lg font-semibold ">
                  <span className="flex gap-1 flex-col items-end">
                    <p>4 Acres</p>
                    <p className="text-xs tracking-widest text-sub">ACREAGE</p>
                  </span>
                  <span className="flex gap-1 flex-col items-end">
                    <p>~67,000 plants</p>
                    <p className="text-xs tracking-widest text-sub">PLANTS</p>
                  </span>
                </section>
              </div>
              <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-3">
                <span className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold">Characteristics</p>
                  <p>
                    Firm fruit walls, deep red color, extended post-harvest
                    shelf life (10–14 days), excellent transport resilience.
                  </p>
                </span>
                <span className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold">Primary Buyers</p>
                  <p>
                    FMCG tomato paste processors, supermarket chains, HORECA
                    (Hotels, Restaurants, Caterers), and open-market
                    aggregators.
                  </p>
                </span>
                <span className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold">Packaging</p>
                  <p>
                    Standard 25kg & 40kg stackable, ventilated plastic crates.
                  </p>
                </span>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CommercialCropsandProduce;
