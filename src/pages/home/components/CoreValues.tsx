import { motion, type Variants } from "framer-motion";
import ValuesCard from "./ValuesCard";
import { assets } from "../../../assets/assets";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

function CoreValues() {
  return (
    <div className="bg-milky w-full flex flex-col gap-16 py-20 px-2">
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="w-full flex flex-col gap-3 items-center justify-center"
      >
        <motion.p variants={item}>Why Ile-Nla Stands Apart</motion.p>
        <motion.p
          variants={item}
          className="text-darkgreen font-extrabold text-[40px]"
        >
          Core Value Pillars
        </motion.p>
      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3"
      >
        <motion.div variants={item}>
          <ValuesCard
            icon={assets.precisionagrimony}
            header="Precision Agronomy"
            subHeader="Climate-Resilient Yields"
            description="By deploying zero-grid solar hybrid pumping systems and closed-loop drip fertigation, we eliminate rain dependency to ensure guaranteed harvest deliveries even during peak dry-season market shortages."
          />
        </motion.div>

        <motion.div variants={item}>
          <ValuesCard
            icon={assets.quality}
            header="Grade-A Hybrid Varieties"
            subHeader="Grade-A Hybrid Varieties"
            description="We cultivate high-shelf-life, disease-resistant F1 hybrids (Cobra F1 tomatoes, Padma F1 habaneros) harvested at peak maturity and packed in ventilated, damage-reducing plastic crates."
          />
        </motion.div>

        <motion.div variants={item}>
          <ValuesCard
            icon={assets.takeoff}
            header="Guaranteed Off-Take"
            subHeader="Structured B2B Partnerships"
            description="Built to serve FMCG processors, modern supermarket chains, and regional wholesale hubs with reliable weekly volume commitments and transparent pricing models."
          />
        </motion.div>
      </motion.section>
    </div>
  );
}

export default CoreValues;
