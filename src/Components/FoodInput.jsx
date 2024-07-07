import styles from './FoodInput.module.css';
const FoodInput = ({ onKeyDown }) =>
{
    return <input className={styles.foodInput} onKeyDown={onKeyDown} type="text" placeholder="Enter Food Item here"></input>;
};

export default FoodInput;