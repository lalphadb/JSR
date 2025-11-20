import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
}

export const Timeline = ({ items, title }: TimelineProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {title && (
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          {title}
        </h2>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Content */}
              <div className="flex-1 md:flex-1">
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {item.icon ? (
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          className="text-brand"
                        >
                          {item.icon}
                        </motion.div>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="text-brand"
                        >
                          <CheckCircle2 className="w-6 h-6" />
                        </motion.div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-brand mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div
                  className="w-4 h-4 bg-brand rounded-full ring-4 ring-white shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:flex-1 md:flex" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
