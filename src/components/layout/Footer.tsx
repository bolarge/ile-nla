import { assets } from "../../assets/assets";

interface FooterColumnProps {
  title: string;
  links: string[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs tracking-widest font-bold">{title}</p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-darkgreen/80 hover:text-darkgreen transition"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

const navigationLinks = ["Home", "About Us", "Commercial Crops", "Technology"];
const businessLinks = [
  "B2B Off-take",
  "Investor Relations",
  "Production Metrics",
  "Contact Sales",
];

const legalLinks = [
  "Privacy Policy",
  "Terms of Supply",
  "Sustainability Statement",
];

function Footer() {
  return (
    <div className="w-full h-200 relative overflow-hidden">
      <img
        src={assets.vegetation}
        alt="vegetation"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-white from-0% via-white/80 via-60% to-white/15 to-85%" />

      <div className="relative z-10 h-full flex flex-col justify-between px-4 py-12">
        <section className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto pt-6">
          <p className="text-darkgreen font-extrabold text-2xl sm:text-3xl md:text-[36px] leading-tight">
            Secure Your Produce Supply via Sustainable Sourcing
          </p>
          <p className="text-sub text-sm max-w-lg">
            Join leading food processors, retail supermarket chains, and
            wholesale distributors by securing guaranteed year-round volume
            commitments rooted in ecological stewardship.
          </p>
          <button className="bg-darkgreen text-white text-sm font-semibold px-6 py-3 rounded-full">
            Request B2B Produce Quote
          </button>
        </section>
        <section className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <img src={assets.logo} alt="Ile-Nla" className="w-6 h-6" />
                <p className="font-bold text-darkgreen">Ile-Nla</p>
              </div>
              <p className="text-sm text-sub leading-relaxed">
                Precision horticulture company based in Nigeria, powering
                reliable off-season vegetable networks through precision AgTech.
              </p>
              <p className="text-xs text-sub/70 leading-relaxed">
                Incorporated as a Private Limited Liability Company under the
                laws of the Federal Republic of Nigeria.
              </p>
            </div>

            <FooterColumn title="NAVIGATION" links={navigationLinks} />
            <FooterColumn title="BUSINESS" links={businessLinks} />
          </div>
        </section>

        <section className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-6xl mx-auto w-full text-xs text-white/90">
          <p>© 2026 Ile-Nla. All rights reserved. RC: XXXXXXX</p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-darkgreen transition"
              >
                {link}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
