import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "react-modal";
import { modalOpenState, selectedCityState, cityListState } from "../../atom";
import styles from "./AppModal.module.css";

Modal.setAppElement("#root");

interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    className?: string;
    overlayClassName?: string;
}

const AddModal: React.FC = () => {
    const [modalOpen, setOpenModal] = useRecoilState(modalOpenState);
    const [searchText, setSearchText] = useState("");
    const [, setSelectedCity] = useRecoilState(selectedCityState);
    const [, setCityList] = useRecoilState<string[]>(cityListState);

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

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearchText(inputValue);
    };

    const modalProps: ModalProps = {
        isOpen: modalOpen,
        onRequestClose: closeModal,
        className: styles.modalContent,
        overlayClassName: styles.modalOverlay,
    };

    return (
        <Modal {...modalProps}>
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
