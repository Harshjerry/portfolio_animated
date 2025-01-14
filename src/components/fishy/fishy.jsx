import React from "react";
import { useRef } from "react";
import "./fishy.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Fishy = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div className="fishy" ref={ref}>

      <motion.div style={{ x: yText }} className="mashi"></motion.div>
      <div className="lekh">
        <h1>An   Information Technology student at Indian Institute of Information Technology Gwalior whose calling is turning ideas into real-life products</h1>
      </div>
    </div>
  );
};

export default Fishy;
