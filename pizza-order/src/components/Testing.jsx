import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Testing = () => {
  const x = useMotionValue(0);
  console.log(x);
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0]);
  return (
    <motion.div
      className="mt-8 cursor-default bg-pink-800 text-center"
      drag="x"
      style={{ x, opacity }}
    >
      Testing
    </motion.div>
  );
};

export default Testing;
