import styles from './FoodInput.module.css';
const FoodInput = ({ handleOnChange }) =>
{
    return <input className={styles.foodInput} onChange={handleOnChange} type="text" placeholder="Enter Food Item here"></input>;
};

export default FoodInput;