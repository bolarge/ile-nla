import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { assets } from "../../assets/assets";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-1000 transition-all duration-400 ease-in-out bg-white/95 shadow-lg
        ${
          scrolled
            ? "top-0 left-0 w-full max-w-full rounded-none"
            : "top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-full"
        }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        <span className="flex items-center gap-1">
          <img src={assets.logo} alt="logo" />{" "}
          <p className="text-[20px] font-extrabold">Ile-Nla</p>
        </span>

        <nav className="flex gap-6 text-sm text-black">
          <Link to="/" className="hover:text-primary hover:underline">
            Home
          </Link>
          <HashLink
            smooth
            to="/#about-us"
            className="hover:text-primary hover:underline"
          >
            About Us
          </HashLink>
          <HashLink
            smooth
            to="/#commercial-crops"
            className="hover:text-primary hover:underline"
          >
            Commercial Crops
          </HashLink>
          <HashLink
            smooth
            to="/#agtech-operations"
            className="hover:text-primary hover:underline"
          >
            AgTech & Operations
          </HashLink>
          <HashLink
            smooth
            to="/#investors"
            className="hover:text-primary hover:underline"
          >
            Investors
          </HashLink>
          <HashLink
            smooth
            to="/#b2b-buyers-portal"
            className="hover:text-primary hover:underline"
          >
            B2B Buyers Portal
          </HashLink>
        </nav>
        <button className="bg-primary text-white font-bold rounded-full px-6 py-3">
          Contact Us
        </button>
      </div>
    </header>
  );
}

export default Header;
