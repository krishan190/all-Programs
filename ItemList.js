import React, { useContext } from "react";
import ItemContext from "../context/ItemContext";

const ItemList = () => {
    const { items, deleteItem } = useContext(ItemContext);

    return (
        <ul>
            {items.map((item) => (
                <li key={item._id}>
                    <strong>{item.name}</strong>: {item.description}
                    <button onClick={() => deleteItem(item._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemList;
