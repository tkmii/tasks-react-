import { useEffect, useRef } from 'react';
import './Modal.css';
import { motion } from "framer-motion";

function Modal({ setIsOpened }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpened]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="modal-overlay"
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{  opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
      >
        <div className="modal-text">
          Модалка открыта
        </div>
        <button
          onClick={() => setIsOpened(false)}
          className="modal-btn"
        >
          Закрыть
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Modal;