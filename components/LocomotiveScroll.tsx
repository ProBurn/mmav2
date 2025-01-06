// components/LocomotiveScroll.tsx
"use client";

import { useEffect } from "react";

const LocomotiveScroll = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (!isMobile) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const locomotiveScroll = new LocomotiveScroll();
        // console.log("locomotiveScroll", locomotiveScroll);
      }
    };

    loadLocomotiveScroll();
  }, []);

  return null; // This component doesn't need to render anything
};

export default LocomotiveScroll;
