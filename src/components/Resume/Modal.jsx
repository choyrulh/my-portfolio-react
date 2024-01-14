// Modal.jsx
import { motion } from "framer-motion";
import { PropTypes } from "prop-types";

const Modal = ({ image, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-20"
      onClick={onClose}
    >
      <motion.img
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "-100vh" }}
        src={image}
        alt="Modal Image"
        className="max-w-full max-h-full"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
