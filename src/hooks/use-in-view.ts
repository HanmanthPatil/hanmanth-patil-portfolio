import { useEffect, useRef, useState } from "react";

export function useInView(options: IntersectionObserverInit = { threshold: 0.12 }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      }, options);

      observer.observe(element);

      return () => {
        observer.disconnect();
      };
    } else {
      setIsInView(true);
    }
  }, [options]);

  return { ref, isInView };
}
