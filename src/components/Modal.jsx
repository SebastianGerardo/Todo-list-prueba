import { AnimatePresence, motion } from "framer-motion";

export const Modal = ({ isOpen, onClose, children }) => {
  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalContentVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalOverlayVariants}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg p-6 overflow-y-auto w-[90%]  md:w-[auto] md:h-[auto] max-w-[90%] max-h-[90%] shadow-x"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalContentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};