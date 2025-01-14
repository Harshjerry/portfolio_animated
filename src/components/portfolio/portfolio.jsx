import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Import images from local src folder
import res2 from "../../images/ecom.png";
import res1 from "../../images/task.png";
import res3 from "../../images/well.png";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: res2, // Use imported image
    desc: "A E-Commerce site made using ReactJS, Material UI 5, ExpressJS, NodeJS, Redux, Firebase",
    url: "https://66cad06c04cb70ba2f8ffebb--ubiquitous-brioche-9b84d7.netlify.app/", // Add a URL
  },
  {
    id: 2,
    title: "Task Management Calendar",
    img: res1, // Use imported image
    desc: "Manage your tasks, schedule your tasks with G's Task Manager",
    url: "https://jazzy-halva-350cc1.netlify.app/", // Add a URL
  },
  {
    id: 3,
    title: "Health Centre UI",
    img: res3, // Use imported image
    desc: "Health wellness site that guides you for yoga, diet, and daily life",
    url: "/#ui", // Add a URL
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* Add Preview link here */}
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="preview-link">
              Preview
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
