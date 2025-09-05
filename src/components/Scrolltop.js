// src/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use setTimeout to allow new page content to render before scrolling
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
