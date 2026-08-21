import { useEffect, useState } from "react";

export interface Metric {
  value: number | null;
  suffix?: string;
  label: string;
  staticValue?: string;
}

export const metrics: Metric[] = [
  { value: 10, suffix: " Acre", label: "Under Active Drip Irrigation" },
  { value: 150000, suffix: "+", label: "Plants in Production Capacity" },
  { value: null, staticValue: "Zero-Grid", label: "Solar Hybrid Water System" },
  { value: 100, suffix: "% Year-Round", label: "Guaranteed Supply Lifecycle" },
];

export function useCountUp(
  target: number | null,
  shouldStart: boolean,
  duration = 1500,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart || target === null) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };

    requestAnimationFrame(step);
  }, [shouldStart, target, duration]);

  return count;
}

export function useMetricDisplay(metric: Metric, shouldStart: boolean) {
  const count = useCountUp(metric.value, shouldStart);
  return metric.value === null
    ? metric.staticValue
    : `${count.toLocaleString()}${metric.suffix ?? ""}`;
}

export function useInViewOnce<T extends HTMLElement>(threshold = 0.3) {
  const [ref, setRef] = useState<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { setRef, inView };
}
