export default function ErrorMessage({ food })
{
    return (
        <> {food.length === 0 && <h1>Im still hungry</h1>}</>
    );
}
