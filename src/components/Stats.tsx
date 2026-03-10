"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "AI Systems Shipped" },
  { value: 5, suffix: "+", label: "Industries Served" },
  { value: 2, suffix: " Weeks", label: "Average Time to Demo" },
  { value: 100, suffix: "%", label: "Remote, Global Clients" },
];

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [target, duration]);

  useEffect(() => {
    if (inView) {
      animate();
    }
  }, [inView, animate]);

  return count;
}

function StatItem({ stat, inView, delay }: { stat: Stat; inView: boolean; delay: number }) {
  const count = useCountUp(stat.value, inView);

  return (
    <AnimatedSection delay={delay} className="text-center">
      <p className="font-display text-4xl md:text-5xl text-background">
        {count}
        {stat.suffix}
      </p>
      <p className="font-body text-sm text-muted mt-2">{stat.label}</p>
    </AnimatedSection>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full section-padding section-dark">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              stat={stat}
              inView={isInView}
              delay={0.1 * (i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
