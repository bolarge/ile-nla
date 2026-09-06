function Header() {
  return (
    <div className="w-full h-screen bg-primary flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 w-full px-2">
        <p className="text-stat tracking-widest text-xs font-semibold">
          LEGAL INFORMATION
        </p>
        <p className="text-white font-extrabold text-3xl md:text-[40px]">
          Privacy Policy
        </p>
        <p className="text-[#D0D8D1] text-sm">Last updated: July 2026</p>
        <p className="text-white text-sm leading-relaxed max-w-2xl mt-2">
          At Ile-Nla, we value your trust and are committed to protecting your
          personal data and farm operational insights. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you interact with our B2B Buyers Portal, investor relations, and
          precision agriculture services.
        </p>
      </div>
    </div>
  );
}

export default Header;
