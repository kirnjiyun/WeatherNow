import React from "react";
import { useRecoilState } from "recoil";
import styles from "./ButtonList.module.css";
import { modalOpenState, cityListState, selectedCityState } from "../../atom";

const ButtonList: React.FC = () => {
 const [cityList, setCityList] = useRecoilState<string[]>(cityListState);
 const [, setSelectedCity] = useRecoilState<string | null>(selectedCityState);
 const setOpenModal = useRecoilState(modalOpenState)[1];

 const openModal = () => {
   setOpenModal(true);
 };

 const removeCity = (city: string) => {
   setCityList((prevList) => prevList.filter((item) => item !== city));
 };

 const handleCityClick = (city: string) => {
   setSelectedCity(city);
 };

 return (
   <ul>
     <li>
       <button className={styles.button} onClick={() => setSelectedCity(null)}>
         Here
       </button>
     </li>
     {cityList.map((city) => (
       <li className={styles.newButtons} key={city}>
         <button className={styles.button} onClick={() => handleCityClick(city)}>
           {city}
         </button>
         <button className={styles.removeButton} onClick={() => removeCity(city)}>
           X
         </button>
       </li>
     ))}
     <li>
       <button className={styles.button} onClick={openModal}>
         +
       </button>
     </li>
   </ul>
 );
};

export default ButtonList;