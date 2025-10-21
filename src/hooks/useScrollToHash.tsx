import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function useScrollToHash(delay = 100) {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (!hash) return;

    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, delay);
    }
  }, [key, hash, delay]);
}
