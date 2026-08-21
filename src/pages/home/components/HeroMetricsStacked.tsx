import { motion, type Variants } from "framer-motion";
import { metrics, useMetricDisplay, useInViewOnce } from "./metricsData";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function StackedItem({
  metric,
  shouldStart,
}: {
  metric: (typeof metrics)[number];
  shouldStart: boolean;
}) {
  const displayValue = useMetricDisplay(metric, shouldStart);
  return (
    <motion.div
      variants={item}
      className="py-5 border-b border-white/10 last:border-b-0"
    >
      <p className="text-3xl font-extrabold text-lime-300">{displayValue}</p>
      <p className="mt-1 text-sm text-white/60">{metric.label}</p>
    </motion.div>
  );
}

function HeroMetricsStacked() {
  const { setRef, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <motion.div
      ref={setRef}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="sm:hidden bg-[#14351f] px-6 py-2"
    >
      {metrics.map((metric, i) => (
        <StackedItem key={i} metric={metric} shouldStart={inView} />
      ))}
    </motion.div>
  );
}

export default HeroMetricsStacked;
