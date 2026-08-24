import { assets } from "../../../assets/assets";
interface FlowStepProps {
  label: string;
  index: number;
  isLast: boolean;
}

function FlowStep({ label, index, isLast }: FlowStepProps) {
  return (
    <div className="relative w-full flex flex-col">
      <div className="bg-darkgreen text-white rounded-full px-5 h-12.5 flex items-center gap-3 text-sm w-full">
        <p>{String(index + 1).padStart(2, "0")}</p>
        <span>{label}</span>
      </div>

      {!isLast && <div className="w-0.5 h-6 bg-borderline ml-9" aria-hidden="true" />}
    </div>
  );
}

interface HighlightCardProps {
  image?: string;
  title: string;
  description: string;
}

function HighlightCard({ image, title, description }: HighlightCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col sm:flex-row">
      <div className="w-full sm:w-40 h-40 sm:h-auto shrink-0 bg-gray-200">
        {image && (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="p-4 flex flex-col gap-1 justify-center">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-sub leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const flowSteps: string[] = [
  "Solar Pumping Array",
  "Elevated Water Reservoir",
  "Dual Disc Filtration + Venturi Fertigation",
  "Sub-Surface Drip Tape (20–30cm Emitters)",
];

const highlights: HighlightCardProps[] = [
  {
    title: "Solar-Powered Water Harvesting",
    description:
      "High-yield industrial boreholes powered by solar PV arrays pump water to elevated reservoirs, eliminating reliance on grid electricity or diesel generators.",
    image: assets.solarpoweredharvesting,
  },
  {
    title: "Gravity-Fed Drip Irrigation",
    description:
      "Low-pressure, non-PC drip tapes deliver micro-doses of water directly to root zones, reducing water consumption by 60% compared to traditional flood irrigation.",
      image:assets.gravitydrip
  },
  {
    title: "Precision Fertigation",
    description:
      "Water-soluble macro and micronutrients are injected into irrigation lines using Venturi systems, ensuring every plant receives exact nutritional dosages.",
      image:assets.fertigation
  },
  {
    title: "Zero-Compression Post-Harvest Facility",
    description:
      "On-site shaded sorting and grading stations prevent sun scalding. Produce is packed exclusively in rigid plastic crates, reducing field-to-market transportation waste from the industry average of 40% down to under 5%.",
      image:assets.harvestfacilty
  },
];

function IrrigationSystemFlow() {
  return (
    <div className="w-full bg-milky py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <section className="flex flex-col gap-3 w-full md:w-[40%]">
          <p className="text-sub tracking-widest text-xs font-semibold">
            IRRIGATION SYSTEM FLOW
          </p>
          <div className="flex flex-col items-start">
            {flowSteps.map((step, i) => (
              <FlowStep
                index={i}
                key={i}
                label={step}
                isLast={i === flowSteps.length - 1}
              />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-sub tracking-widest text-xs font-semibold">
            TECHNICAL HIGHLIGHTS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, i) => (
              <HighlightCard key={i} {...highlight} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default IrrigationSystemFlow;
