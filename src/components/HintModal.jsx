import React from 'react';
import { motion } from 'framer-motion';

const HintModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-base-100 p-6 rounded-lg shadow-xl max-w-xs"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-primary">🎵 Secreto Musical</h3>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost">✕</button>
        </div>
        
        <div className="divider my-2"></div>
        
        <p className="text-base-content mb-4">
          Hay un secreto escondido en esta página...
        </p>
        
        <p className="font-medium mb-6 text-accent">
          Prueba a escribir <span className="text-primary font-bold font-mono">strings</span> en tu teclado mientras navegas por la página. 😉
        </p>
        
        <div className="text-center">
          <button onClick={onClose} className="btn btn-sm btn-primary">
            ¡Lo intentaré!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HintModal;