import styles from "./Item.module.css";

export default function Items({ food })
{
    console.log(styles);
    return (<> <li className={`${styles['pp-item']} list-group-item`}>
        <span className={styles['pp-span']}>{food}</span>
    </li></>);
}
