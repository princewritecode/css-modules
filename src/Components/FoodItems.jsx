import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./Items";
import '../App.css';
import { useState } from "react";
export default function FoodItems({ food })
{
    const [activeItems, setActiveItems] = useState([]);
    const onBuyButton = (item, event) =>
    {
        console.log(`${item} bought`);
        let newItems = [...activeItems, item];
        setActiveItems(newItems);
    };
    return (
        <ul className="list-group">
            {food.map((item, index) => (
                <Items
                    buyButtonClicked={() =>
                    {
                        (event) => { onBuyButton(item, event); };

                    }}
                    key={index}
                    bought={activeItems.includes(item)}
                    food={item}
                />
            ))}
        </ul>
    );
}

