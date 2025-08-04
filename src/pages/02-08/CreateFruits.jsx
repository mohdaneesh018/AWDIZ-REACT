import React, { useState } from 'react'

const CreateFruits = () => {
    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
    const [newFruits, setNewFruits] = useState("");

    const handleInputChange = (event) => {
        setNewFruits(event.target.value);
    };

    const handleSubmit = () => {
        // if (newFruits.length > 0) {
        if (newFruits.trim() !== "") {
            setFruits([...fruits, newFruits]);
            setNewFruits("");
        } else {
            alert("Please enter a fruit name");
        }

        const handleDelete = (index) => {
            // console.log("Delete clicked for index:", index);
            const updatedFruits = fruits.filter((_, i) => i !== index);
            // console.log("Updated Fruits:", updatedFruits);
            setFruits(updatedFruits);
        };
    }

    return (
        <div>
            <h2>Fruits</h2>
            {fruits.map((fruits, index) => (
                <div key={index}>
                    <h1>
                        {index + 1}. {fruits}
                    </h1>
                    {/* <button onClick={() => handleDelete(index)}>Delete</button> */}
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
            <input value={newFruits} onChange={handleInputChange} />
            <br />
            <button onClick={handleSubmit}>Add {newFruits}</button>
        </div>
    )
}

export default CreateFruits
