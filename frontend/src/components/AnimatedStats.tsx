import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Award, Users, CheckCircle2, Zap } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  label: string;
  value: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    icon: <Award className="w-8 h-8" />,
    label: "Années d'expérience",
    value: "15",
    suffix: "+",
  },
  {
    icon: <Users className="w-8 h-8" />,
    label: "Clients satisfaits",
    value: "500",
    suffix: "+",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    label: "Projets complétés",
    value: "1000",
    suffix: "+",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    label: "Service 24/7",
    value: "100",
    suffix: "%",
  },
];

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / 30;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const AnimatedStats = () => {
  return (
    <section className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-orange/10" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos accomplissements
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Des chiffres qui parlent de notre engagement envers l'excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                className="text-4xl md:text-5xl font-bold mb-2 text-orange"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter
                  target={parseInt(stat.value)}
                  suffix={stat.suffix}
                />
              </motion.div>

              <p className="text-white/80 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
