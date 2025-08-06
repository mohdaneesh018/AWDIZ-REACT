import React, { useState } from 'react'

const CreateFruits = () => {
    const [editIndex, setEditIndex] = useState(null);
    const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);
    const [newFruits, setNewFruits] = useState("");

    const handleInputChange = (event) => {
        setNewFruits(event.target.value);
    };

    const handleSubmit = () => {
        if (newFruits.trim() !== "") {
            setFruits([...fruits, newFruits]);
            setNewFruits("");
        } else {
            alert("Please enter a fruit name");
        }
    }

    const handleDelete = (index) => {
        const updatedFruits = fruits.filter((_, i) => i !== index);
        setFruits(updatedFruits);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setNewFruits(fruits[index]);
    }

    const handleUpdate = () => {
        if (editIndex !== null && newFruits.trim() !== "") {
            const updatedFruits = [...fruits];
            updatedFruits[editIndex] = newFruits;
            setFruits(updatedFruits);
            setNewFruits("");
            setEditIndex(null);
        } else {
            alert("Please select a fruit to edit and enter a new name");
        }
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
                    <button onClick={() => handleEdit(index)} >Edit</button>
                </div>
            ))}
            <input value={newFruits} onChange={handleInputChange} />
            {/* <input type="radio" value="honda" />
            <select>
                <option value="honda">honda</option>
            </select> */}
            <br />
            {editIndex !== null ? (
                <button onClick={handleUpdate}>Update</button>
            ) : (<button onClick={handleSubmit}>Add {newFruits}</button>)
            }
            {editIndex !== null && (
                <button onClick={() => { setEditIndex(null); setNewFruits(" "); }}>Cancel Edit</button>
            )
            }
        </div>
    )
}

export default CreateFruits
