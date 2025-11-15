import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const FadeInUp = ({ children, className = "", delay = 0, duration = 0.6 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInDown = ({ children, className = "", delay = 0, duration = 0.6 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInLeft = ({ children, className = "", delay = 0, duration = 0.6 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInRight = ({ children, className = "", delay = 0, duration = 0.6 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, className = "", delay = 0, duration = 0.6 }: AnimatedSectionProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay }}
    viewport={{ once: true, margin: "-100px" }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "" }: Omit<AnimatedSectionProps, "delay" | "duration">) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }: Omit<AnimatedSectionProps, "delay" | "duration">) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
