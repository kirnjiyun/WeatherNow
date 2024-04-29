import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { modalOpenState, selectedCityState, cityListState } from "../../atom";
import styles from "./AppModal.module.css";

const AddModal = () => {
    const [ModalOpen, setOpenModal] = useRecoilState(modalOpenState);
    const [searchText, setSearchText] = useState("");
    const [, setSelectedCity] = useRecoilState(selectedCityState);
    const [, setCityList] = useRecoilState(cityListState);

    const closeModal = () => {
        setOpenModal(false);
        setSearchText("");
    };

    const handleSearch = () => {
        if (searchText.trim() !== "") {
            const formattedCity =
                searchText.charAt(0).toUpperCase() +
                searchText.slice(1).toLowerCase();
            setSelectedCity(formattedCity);
            setCityList((prevList) => [...prevList, formattedCity]);
            closeModal();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearchChange = (e) => {
        const inputValue = e.target.value;
        setSearchText(inputValue);
    };

    return (
        <Modal
            isOpen={ModalOpen}
            onRequestClose={closeModal}
            className={styles.modalContent}
            overlayClassName={styles.modalOverlay}
        >
            <h2 className={styles.modalTitle}>Search</h2>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    className={styles.searchInput}
                    placeholder="ex) Seoul"
                    value={searchText}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                />
                <button className={styles.button} onClick={handleSearch}>
                    Add
                </button>
            </div>
            <button className={styles.closeButton} onClick={closeModal}>
                &times;
            </button>
        </Modal>
    );
};

export default AddModal;
