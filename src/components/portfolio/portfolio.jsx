import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Import images from local src folder
import res2 from "../../images/spread.png";
import res1 from "../../images/sort.png";
import res3 from "../../images/shorte.png";

const items = [
  {
    id: 1,
    title: "Spreadsheet Enricher",
    img: res2, // Use imported image
    desc: "Streamlit application that allows users to enrich their spreadsheet data by leveraging AI-powered queries. Users can upload a CSV file or link a Google Sheet, specify a query to enhance their data, and receive enriched results that can be saved back to Google Sheets or downloaded as a CSV file",
    url: "https://github.com/sakshepathak/csv-enricher", // Add a URL
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualizer",
    img: res1, // Use imported image
    desc: "Built a Java tool to visually demonstrate sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort) with dynamic animations. Enabled real-time comparison and step-by-step execution using a user-friendly interface.",
    url: "https://github.com/sakshepathak/sorting-Algorithm-Visualizer", // Add a URL
  },
  {
    id: 3,
    title: "URL Shortener",
    img: res3, // Use imported image
    desc: "Allows users to convert long URLs into shorter, more manageable links. Each short URL redirects to the original long URL, and the application tracks the number of times each short URL is accessed.",
    url: "https://github.com/sakshepathak/UrlShortner", // Add a URL
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
