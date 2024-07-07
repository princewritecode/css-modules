import styles from "./Item.module.css";

export default function Items({ food, buyButtonClicked, bought })
{


    return (<>
        <li className={`${styles['pp-item']} list-group-item ${bought && 'active'}`}>
            <span className={styles['pp-span']}>{food}</span>
            <button onClick={buyButtonClicked} className={`${styles.button} btn btn-info `}> Buy </button>
        </li >
    </>);
}

