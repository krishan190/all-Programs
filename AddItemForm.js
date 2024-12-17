import React, { useState, useContext } from "react";
import ItemContext from "../context/ItemContext";

const AddItemForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const { addItem } = useContext(ItemContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({ name, description }); // Call the context function
        setName("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
