interface MetricRowProps {
  label: string;
  description: string;
}

function MetricRow({ label, description }: MetricRowProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:border md:border-tertiary md:border-l-3 border-l-3 rounded-lg md:rounded-none">
      <div className="bg-[#E0F0D3] px-6 py-5 flex items-center rounded-t-lg md:rounded-none">
        <p className="text-darkgreen font-semibold text-sm">{label}</p>
      </div>
      <div className="sm:col-span-2 px-6 py-5 flex items-center border-tertiary">
        <p className="text-sub text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

const investorMetrics: MetricRowProps[] = [
  {
    label: "Asset-Backed Security",
    description:
      "100% company-owned land assets (Property, Plant, and Equipment) listed on the balance sheet.",
  },
  {
    label: "Debt Service & Financial Health",
    description:
      "Supported by structured institutional credit facilities (e.g., Stanbic IBTC) with strict debt service coverage ratios.",
  },
  {
    label: "ESG Integration",
    description:
      "Solar-powered irrigation reduces carbon footprint; local labor programs support youth empowerment and gender-inclusive farm employment in rural communities.",
  },
];

function InvestorsandStakeHolder() {
  return (
    <div className="w-full bg-white py-16 md:py-16 px-2">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <section className="flex flex-col gap-4">
          <p className="text-sub tracking-widest text-xs font-semibold">
            INVESTORS & STAKEHOLDERS
          </p>
          <p className="text-darkgreen font-extrabold text-3xl md:text-[40px]">
            Sustainable Agriculture, Superior Returns.
          </p>
          <p className="text-sub text-sm leading-relaxed max-w-2xl">
            <span className="font-semibold text-black">Ile-Nla</span> combines
            land ownership, modern infrastructure, and food security
            fundamentals to deliver strong earnings before interest, taxes,
            depreciation, and amortization (EBITDA).
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-sub tracking-widest text-xs font-semibold">
            KEY INVESTOR METRICS
          </p>
          <div className="w-full flex flex-col gap-5 md:gap-1">
            {investorMetrics.map((metric, i) => (
              <MetricRow key={i} {...metric} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default InvestorsandStakeHolder;
