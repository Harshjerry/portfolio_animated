import React from "react";
import { useRef } from "react";
import "./parallax2.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax2 = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);


  return (
    <div
      className="parallax"    ref={ref} >
    <div  className="sky"> </div>
                                <div  className="city">
                                       <div  className="left"> </div>
                                       <div  className="center"> </div>
                                       <div  className="right"> </div>
                                </div>
                                                                          <div  className="river"> </div>
                                                  <motion.div style={{ x: yBg }} className="train"> </motion.div>
                                          <div  className="bridge"> </div>
<div className="hills">
<div className="leftHill"></div>
<div className="rightHill"></div>
</div>
<motion.div style={{ y: yText }}  className="text">
<h1 >Welcome</h1>
</motion.div>
                                 </div>
  );
};

export default Parallax2;
