import React, { useState } from "react";
import Modal from "react-modal";

const AddModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal isOpen={isOpen} onRequestClose={closeModal}>
                <h2>Modal Title</h2>
                <p>Modal Content</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </div>
    );
};

export default AddModal;
