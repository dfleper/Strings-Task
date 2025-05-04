import { useState, useEffect, useMemo } from 'react';
import Modal from '../components/Modal';
import StringCard from '../components/StringCard';
import stringsMethods from '../data/methods.json';


const Methods = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleOpenModal = (stringMethod) => {
    setSelectedMethod(stringMethod);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-0">
  {stringsMethods.map((stringMethod) => (
    <StringCard
      key={stringMethod.title}
      stringMethod={stringMethod}
      onClick={() => handleOpenModal(stringMethod)}
    />
  ))}
</div>

      </div>

      {isModalOpen && selectedMethod && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          stringMethod={selectedMethod}
        />
      )}
    </div>
  );
};

export default Methods;
