// components/LocomotiveScrollWrapper.tsx
"use client"
import dynamic from "next/dynamic";

const LocomotiveScroll = dynamic(() => import("@/components/LocomotiveScroll"), {
  ssr: false, // Disable SSR, this will only be rendered on the client
});

const LocomotiveScrollWrapper = () => {
  return <LocomotiveScroll />;
};

export default LocomotiveScrollWrapper;
