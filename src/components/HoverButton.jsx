import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HoverButton = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative inline-block">
      <motion.button
        onClick={props.onClick}
        className={`${props.colorChange} w-11 h-11 flex justify-center items-center border
                    text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 
                    focus:ring-offset-2`}
        whileHover={{ scale: 1.05 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.children}
      </motion.button>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`w-max fixed z-10 mt-2 px-3 sm:px-0 transform -translate-x-0 ease-in-out duration-150`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative bg-white p-2 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              {props.dialog}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HoverButton;