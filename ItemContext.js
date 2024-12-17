import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create context
const ItemContext = createContext();

// Provider component
export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]); // State for managing items

    // Fetch items from the server
    const getItems = async () => {
        try {
            const response = await axios.get("/api/items");
            setItems(response.data); // Update state
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    };

    // Add a new item
    const addItem = async (item) => {
        try {
            const response = await axios.post("/api/items", item);
            setItems([...items, response.data]); // Update state
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Delete an item
    const deleteItem = async (id) => {
        try {
            await axios.delete(`/api/items/${id}`);
            setItems(items.filter((item) => item._id !== id)); // Update state
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    // Update an item
    const updateItem = async (id, updatedItem) => {
        try {
            const response = await axios.put(`/api/items/${id}`, updatedItem);
            setItems(
                items.map((item) =>
                    item._id === id ? response.data : item
                )
            ); // Update state
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };

    // Load items when the app starts
    useEffect(() => {
        getItems();
    }, []);

    return (
        <ItemContext.Provider
            value={{ items, getItems, addItem, deleteItem, updateItem }}
        >
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;
