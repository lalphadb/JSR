import { useEffect, useRef, useState } from "react";

export const useCounterAnimation = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const remaining = endTime - now;

      if (remaining <= 0) {
        setCount(end);
        return;
      }

      const progress = (duration - remaining) / duration;
      const easeOutQuad = 1 - (1 - progress) ** 2;
      setCount(Math.floor(start + (end - start) * easeOutQuad));

      requestAnimationFrame(updateCount);
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, start, end, duration]);

  return { count, ref };
};
