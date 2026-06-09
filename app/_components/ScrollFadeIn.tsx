"use client";
import { motion, useAnimation } from "framer-motion";
import React, { PropsWithChildren, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const ScrollFadeIn = ({ children }: PropsWithChildren) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      {children}
    </motion.div>
  );
};
