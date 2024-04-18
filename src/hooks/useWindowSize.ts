import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 390,
  tablet: 768,
  desktop: 1440,
};

export function useWindowSize() {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isTablet, setIsTablet] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function update() {
    setIsDesktop(window.innerWidth >= breakpoints.desktop);
    setIsTablet(
      window.innerWidth >= breakpoints.tablet &&
        window.innerWidth < breakpoints.desktop - 0.02
    );
    setIsMobile(window.innerWidth < breakpoints.tablet - 0.02);
  }

  useEffect(() => {
    update();
    window.addEventListener("resize", update, false);

    return () => {
      window.removeEventListener("resize", update, false);
    };
  }, []);

  return { isDesktop, isMobile, isTablet };
}

export type ViewportSize = ReturnType<typeof useWindowSize>;
