import React, { useState } from "react";

function Card({ title, description }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        className="max-w-md overflow-hidden rounded shadow-lg cursor-pointer"
        onClick={openModal}
      >
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-1/2 p-4 bg-white rounded modal">
            <h2 className="mb-2 text-xl font-bold">{title}</h2>
            <p>{description}</p>
            <button className="mt-4 btn btn-primary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
