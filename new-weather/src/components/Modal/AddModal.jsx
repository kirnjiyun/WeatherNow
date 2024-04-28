import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { modalOpenState } from "../../atom";
import styles from "./AppModal.module.css";

const AddModal = () => {
    const [ModalOpen, setOpenModal] = useRecoilState(modalOpenState);
    const [searchText, setSearchText] = useState("");

    const closeModal = () => {
        setOpenModal(false);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = () => {
        console.log("검색어:", searchText);
    };

    return (
        <Modal
            isOpen={ModalOpen}
            onRequestClose={closeModal}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <h2 className={styles.modalTitle}>Search </h2>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="ex) Seoul"
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <button className={styles.button} onClick={handleSearch}>
                    Search
                </button>
            </div>
            <p className={styles.modalText}>
                Modal ContentModal ContentModal ContentModal ContentModal
                ContentModal ContentModal ContentModal ContentModal ContentModal
                ContentModal ContentModal ContentModal ContentModal Content
            </p>
            <button className={styles.closeButton} onClick={closeModal}>
                &times;
            </button>
        </Modal>
    );
};

export default AddModal;
