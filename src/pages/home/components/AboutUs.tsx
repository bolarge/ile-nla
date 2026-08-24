import { assets } from "../../../assets/assets";
import VisionandMission from "./VisionandMission";

function AboutUs() {
  return (
    <div className="w-full bg-primary py-24 px-2">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <section className="flex flex-col gap-1.5">
          <p className="text-stat tracking-widest text-xs font-semibold">
            ABOUT US
          </p>
          <h2 className="text-[40px] font-bold text-white">
            Built on Heritage, Driven by Innovation.
          </h2>
        </section>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5 w-full">
            <p className="text-stat text-[36px]">"Ile-Nla"</p>
            <p className="text-texttertia text-sm">Yoruba · "Big House"</p>
          </div>

          <div className="w-full text-white">
            <p>
              <strong>"Ile-Nla"</strong> translates from Yoruba as{" "}
              <strong>"Big House."</strong> In West African heritage, the Big
              House represents abundance, refuge, security, and sustained
              enterprise. <strong>Ile-Nla</strong> was incorporated to embody
              these principles by converting fertile Nigerian land into a
              reliable food basket for urban centers and processing industries.
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 py-12">
          <VisionandMission
            image={assets.visionimage}
            header="Our Vision"
            description="To become West Africa's most reliable, tech-enabled commercial producer of fresh horticultural cash crops, setting the regional benchmark for yield efficiency and post-harvest quality control."
          />
          <VisionandMission
            image={assets.missionimage}
            header="Our Mission"
            description="To bridge Nigeria's off-season vegetable deficit by combining precision drip irrigation, high-yield hybrid genetics, and environmental stewardship—delivering maximum value to consumers, off-takers, and shareholders."
          />
        </div>
        <div className="w-full space-y-6">
          <section className="border-b-2 border-b-stat pb-4">
            <p className="text-stat font-semibold tracking-widest">
              LEADERSHIP & CORPORATE GOVERNANCE
            </p>
          </section>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <span className="flex flex-col gap-1.5 text-white">
              <p className="text-lg font-semibold">
                Board & Executive Management
              </p>
              <p className="text-sm">
                Led by seasoned agricultural operators, agronomic engineers, and
                corporate finance executives committed to environmental, social,
                and governance (ESG) compliance.
              </p>
            </span>
            <span className="flex flex-col gap-1.5 text-white">
              <p className="text-lg font-semibold">Agronomic Excellence</p>
              <p className="text-sm">
                Managed on-site by certified agronomists enforcing strict
                Integrated Pest Management (IPM) protocols and full chemical
                traceability.
              </p>
            </span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
