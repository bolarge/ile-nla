import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 max-w-4xl mx-auto"
    >
      <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Nourishing Nations From The Roots Up.
      </h1>

      <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl">
        Ile-Nla is a modern, 10-acre commercial horticulture enterprise driving
        year-round vegetable security through precision solar-powered irrigation
        and climate-smart agronomy.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <Link
          to="/quote"
          className="w-full sm:w-auto text-center bg-[#2b7a1e] hover:bg-[#256a1a] text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Request B2B Produce Quote
        </Link>

        <Link
          to="/production-capabilities"
          className="w-full sm:w-auto text-center bg-white hover:bg-gray-100 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          View Our Production Capabilities
        </Link>
      </div>
    </motion.div>
  );
}

export default HeroText;
