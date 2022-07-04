import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { urlFor, client } from "../../client";
import { MdWavingHand } from "react-icons/md";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <div className="app__about-text">
        <h2 className="head-text">
          I Love Learning <span>New Technologies </span> <br /> To create
          <span> Functional </span> and <span>Beautiful</span> Websites
        </h2>

        <p className="p-text">
          Hello {""}
          <span>
            <MdWavingHand className="handIcon-small" />
          </span>
          , welcome to my about section. <br /> I am a Bologna-based frontend
          developer who loves clean designs and functional websites. <br /> I
          aim to know everything about web development and I am constantly
          updating my skills. <br /> Hope you will enjoy the visit.
        </p>
      </div>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text c-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
