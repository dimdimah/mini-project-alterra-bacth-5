// Import React and TailwindCSS
import { AiFillLike } from "@react-icons/all-files/ai/AiFillLike";
import { AiFillEye } from "@react-icons/all-files/ai/AiFillEye";
import React, { useState } from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>
        <div
          className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const ModalApp = ({ imageUrl, name, rate, view, title, description, alt }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mx-auto">
      <div className="w-96">
        <button className="mt-4 font-bold" onClick={toggleModal}>
          <img src={imageUrl} alt={alt} width={280} height={200} />
        </button>
        <div className="flex w-[280px] justify-between text-base">
          <div>
            <p>{name}</p>
          </div>
          <div className="flex items-center space-x-2">
            <AiFillLike />
            <p>{rate}</p>
            <AiFillEye />
            <p>{view}</p>
          </div>
        </div>
      </div>
      <Modal show={showModal} onClose={toggleModal}>
        <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg font-medium leading-6 text-gray-900"
                id="modal-headline"
              >
                {title}
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:mr-3 sm:w-auto sm:text-sm"
            onClick={toggleModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalApp;
