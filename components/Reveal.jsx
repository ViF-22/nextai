import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

function Reveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); //it will fire only once

  const mainControls = useAnimation();

  useEffect(() => {
    // console.log("in view");
    if (inView) {
      mainControls.start("visible"); //change to what was in animate
    }
  }, [inView]);

  return (
    <div className="relative text-white" ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
