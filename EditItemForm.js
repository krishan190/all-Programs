import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemContext from "../context/ItemContext";

const EditItemForm = () => {
    const { items, updateItem } = useContext(ItemContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const itemToEdit = items.find((item) => item._id === id);
        if (itemToEdit) {
            setName(itemToEdit.name);
            setDescription(itemToEdit.description);
        }
    }, [id, items]);

    const handleSubmit = (e) => {
        e.preventDefault();
        updateItem(id, { name, description }); // Call the context function
        navigate("/"); // Redirect to the home page
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
            <button type="submit">Update Item</button>
        </form>
    );
};

export default EditItemForm;
