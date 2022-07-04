import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { MdWavingHand } from "react-icons/md";
import { AppWrap } from "../../wrapper";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        {/* Greetings-top-badge main container */}
        <div className="app__header-badge">
          {/* Greetings badge container */}
          <div className="badge-cmp app__flex">
            <MdWavingHand className="handIcon-big" />
            {/* Greetings text container */}
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">
                <span>Alessio</span>
              </h1>
            </div>
          </div>
          {/* Greetings-bottom-tag main container */}
          <div className="tag-cmp app__flex">
            <p className="p-text">Self taught</p>
            <p className="p-text">Front End Developer</p>
          </div>
        </div>
      </motion.div>

      {/* Profile image */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>

      {/* Skills circles */}
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.redux, images.react, images.sass].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
