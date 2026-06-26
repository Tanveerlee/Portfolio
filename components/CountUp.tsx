"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, suffix = "", duration = 1600, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (ref.current) ref.current.textContent = Math.round(eased * value) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, suffix, duration]);

  // SSR and pre-animation: render real value so crawlers and bots see correct numbers
  return <span ref={ref} className={className}>{value}{suffix}</span>;
}
