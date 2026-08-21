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

function OverlayItem({
  metric,
  shouldStart,
}: {
  metric: (typeof metrics)[number];
  shouldStart: boolean;
}) {
  const displayValue = useMetricDisplay(metric, shouldStart);
  return (
    <motion.div variants={item} className="text-white text-center sm:text-left">
      <p className="text-2xl sm:text-3xl font-bold">{displayValue}</p>
      <p className="mt-1 text-xs sm:text-sm text-white/70">{metric.label}</p>
    </motion.div>
  );
}

function HeroMetricsOverlay() {
  const { setRef, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div
      ref={setRef}
      className="hidden sm:block absolute inset-x-0 bottom-0 px-6 pb-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="max-w-6xl mx-auto grid grid-cols-4 gap-6"
      >
        {metrics.map((metric, i) => (
          <OverlayItem key={i} metric={metric} shouldStart={inView} />
        ))}
      </motion.div>
    </div>
  );
}

export default HeroMetricsOverlay;
