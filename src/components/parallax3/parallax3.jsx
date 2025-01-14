import React from "react";
import { useRef } from "react";
import "./parallax3.scss";
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax3= () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);



  return (
    <div
      className="parallax"    ref={ref} >
      <div className="balance"></div>
<div className="hilll"></div>
   <div  className="desert"> </div>
    <div className="bg"></div>
                                <div  className="wall">
                                       <div  className="desertRock"> </div>
                                       <div  className="waterfall"> </div>
                                </div>
                                                                          <div  className="nadi"> </div>
                                                  <motion.div style={{ x: yBg }} className="man"> </motion.div>
                                          <div  className="grass"> </div>

                                 </div>
  );
};

export default Parallax3;
