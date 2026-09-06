import { type ReactNode } from "react";
import { assets } from "../../assets/assets";

interface StewardshipCard {
  icon?: string;
  title: string;
  subtitle: string;
  description: string;
}

const stewardshipCards: StewardshipCard[] = [
  {
    title: "Water Conservation",
    subtitle: "PRECISION SOLAR DRIP",
    description:
      "Closed-loop, gravity-fed subsurface drip irrigation reduces water waste by 60% compared to traditional flood farming, delivering water straight to root zones.",
    icon: assets.waterdrop,
  },
  {
    title: "Zero-Grid Solar Energy",
    subtitle: "100% CLEAN ENERGY",
    description:
      "A decentralized solar hybrid photovoltaic array powers all water pumping and post-harvest operations, eliminating reliance on expensive diesel generators.",
    icon: assets.zerogrid,
  },
  {
    title: "Biodiversity Preservation",
    subtitle: "ECOLOGICAL BUFFERS",
    description:
      "By integrating multi-species crop buffers and preserving perimeter wetlands, we maintain natural corridors that support beneficial insects and local wildlife.",
    icon: assets.biodiversity,
  },
];

function StewardshipCardItem({
  icon,
  title,
  subtitle,
  description,
}: StewardshipCard) {
  return (
    <div className="border border-tertiary rounded-xl p-6 flex flex-col gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        {icon && <img src={icon} alt={title} className="w-4 h-4" />}
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-bold text-black">{title}</p>
        <p className="text-xs tracking-widest text-sub font-semibold">
          {subtitle}
        </p>
      </div>
      <p className="text-sm text-sub leading-relaxed">{description}</p>
    </div>
  );
}

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  className?: string;
}

function SectionHeader({ label, title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <p className="text-sub tracking-widest text-xs font-semibold">{label}</p>
      <p className="text-darkgreen font-extrabold text-3xl md:text-[44px] leading-tight">
        {title}
      </p>
    </div>
  );
}

function SustainabilityStatementContent() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Core Philosophy */}
        <section className="flex flex-col gap-8">
          <SectionHeader
            label="THE CORE PHILOSOPHY"
            title="Sustained Abundance Through Circular Ecology"
            className="pb-6 border-b border-gray-100"
          />

          <div className="flex flex-col gap-6 max-w-4xl">
            <p className="text-darkgreen font-semibold text-xl md:text-2xl leading-snug">
              "We do not inherit the earth from our ancestors, we borrow it from
              our children."
            </p>
            <p className="text-sub text-sm leading-relaxed">
              In West African heritage, the "Big House" (Ile-Nla) stands for
              refuge, shared prosperity, and long-term security. Our ecological
              approach honors this tradition by treating every acre as a living
              asset. We employ modern biological practices to build rich soil,
              recycle crop waste, and eliminate resource drain.
            </p>
            <p className="text-sub text-sm leading-relaxed">
              Through precision drip systems and decentralized clean energy, we
              bridge the off-season food deficit in Nigeria, setting an
              operational blueprint for self-sufficient, low-carbon commercial
              farming in the tropics.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <SectionHeader
              label="ENVIRONMENTAL STEWARDSHIP"
              title="Protecting Soil, Water & Air"
            />
            <p className="text-sub text-sm max-w-2xl">
              How our zero-grid infrastructure and resource protection systems
              work together to preserve local ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stewardshipCards.map((card, i) => (
              <StewardshipCardItem key={i} {...card} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default SustainabilityStatementContent;
