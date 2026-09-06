function Header() {
  return (
    <div className="w-full h-142 sm:h-150 bg-primary flex items-center">
      <div className="max-w-6xl mx-auto flex flex-col gap-3 w-full px-2">
        <p className="text-stat tracking-widest text-xs font-semibold">
          LEGAL FRAMEWORK
        </p>
        <p className="text-white font-extrabold text-3xl md:text-[40px]">
          Terms Of Supply
        </p>
        <p className="text-[#D0D8D1] text-sm">
          Effective Date: <strong className="text-stat">July 2026</strong>
        </p>
      </div>
    </div>
  );
}

export default Header;
