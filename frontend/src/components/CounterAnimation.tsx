import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterAnimationProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  icon?: React.ReactNode;
}

export const CounterAnimation = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
  label,
  icon,
}: CounterAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      {icon && (
        <motion.div
          className="flex justify-center mb-4"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <div className="text-brand text-4xl">{icon}</div>
        </motion.div>
      )}

      <motion.div
        className="text-4xl md:text-5xl font-bold text-brand mb-2"
        key={count}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </motion.div>

      <p className="text-lg text-text-secondary font-medium">{label}</p>
    </motion.div>
  );
};
