// "use client";
// import React, { useEffect } from "react";
// import { motion, useAnimation, Variants } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// interface ScrollRevealProps {
//   children: React.ReactNode;
//   delay?: number;
//   duration?: number;
//   y?: number;
//   type?: "fade" | "slide-up" | "slide-down" | "zoom";
// }

// const ScrollReveal: React.FC<ScrollRevealProps> = ({
//   children,
//   delay = 0,
//   duration = 0.6,
//   y = 40,
//   type = "fade",
// }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

//   useEffect(() => {
//     if (inView) controls.start("visible");
//   }, [controls, inView]);

//   const variants: Variants = {
//     hidden: {
//       opacity: 0,
//       ...(type === "slide-up" && { y }),
//       ...(type === "slide-down" && { y: -y }),
//       ...(type === "zoom" && { scale: 0.9 }),
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//     },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       variants={variants}
//       initial="hidden"
//       animate={controls}
//       transition={{ duration, delay, ease: "easeOut" }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default ScrollReveal;

"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  type?: "fade" | "slide-up" | "slide-down" | "zoom";
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 40,
  type = "fade",
  once = true,
}) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...(type === "slide-up" && { y }),
      ...(type === "slide-down" && { y: -y }),
      ...(type === "zoom" && { scale: 0.9 }),
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // cubic-bezier yang lebih smooth
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
