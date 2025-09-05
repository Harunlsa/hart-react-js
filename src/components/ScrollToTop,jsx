import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll reset
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // or "smooth" if you prefer animation
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
