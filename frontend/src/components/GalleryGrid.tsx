import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  categories?: string[];
}

export const GalleryGrid = ({ items, categories = [] }: GalleryGridProps) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Tous");

  const uniqueCategories = ["Tous", ...new Set(items.map((item) => item.category))];
  const filteredItems = activeCategory === "Tous" ? items : items.filter((item) => item.category === activeCategory);

  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {uniqueCategories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === category
                ? "bg-brand text-white shadow-lg"
                : "bg-white text-text-primary border border-surface-border hover:border-brand"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedId(item.id)}
              className="cursor-pointer group"
            >
              <motion.div
                className="relative h-64 rounded-lg overflow-hidden bg-gray-200 shadow-md hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-full p-3"
                  >
                    <ZoomIn className="w-6 h-6 text-brand" />
                  </motion.div>
                </div>
              </motion.div>
              <div className="mt-4">
                <p className="text-sm text-brand font-semibold">{item.category}</p>
                <h3 className="text-lg font-bold text-text-primary mt-1">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg max-w-2xl w-full overflow-hidden"
            >
              <div className="relative">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-6 h-6 text-text-primary" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-sm text-brand font-semibold mb-2">{selectedItem.category}</p>
                <h2 className="text-2xl font-bold text-text-primary mb-3">{selectedItem.title}</h2>
                <p className="text-text-secondary leading-relaxed">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
