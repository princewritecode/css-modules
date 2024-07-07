import "bootstrap/dist/css/bootstrap.min.css";
import Items from "./Items";
import '../App.css';
export default function FoodItems({ food })
{
    return (
        <ul className="list-group">
            {food.map((item, index) => (
                <Items
                    buyButtonClicked={() => console.log(`${item} bought`)}
                    key={index}
                    food={item}
                />
            ))}
        </ul>
    );
}

