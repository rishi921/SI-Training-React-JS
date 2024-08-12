import { useState } from "react";

const DisplayList = () => {
    const [fruits, setFruits] = useState(['Guava', 'Orange', 'Jackfruit', 'Pineapple', 'Grapes']);
    const [newFruit, setNewFruit] = useState('');

    const addFruit = () => {
        if (newFruit && !fruits.includes(newFruit)) {
            setFruits([...fruits, newFruit]);
            setNewFruit('');
        }
    };

    const removeFruit = () => {
        setFruits(fruits.filter(fruit => fruit !== newFruit));
        setNewFruit('');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h3 style={{ backgroundColor: 'brown', color: 'white', padding: '10px', borderRadius: '5px' }}>
                Fruits List
            </h3>
            <div style={{ margin: '20px' }}>
                <label htmlFor="fruitInput" style={{ marginRight: '10px' }}>Enter:</label>
                <input
                    id="fruitInput"
                    type="text"
                    value={newFruit}
                    onChange={(e) => setNewFruit(e.target.value)}
                    placeholder="Enter fruit name"
                    style={{ padding: '5px', borderRadius: '5px' }}
                />
            </div>
            <div style={{ margin: '20px' }}>
                <button
                    onClick={addFruit}
                    style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginRight: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                >
                    Add
                </button>
                <button
                    onClick={removeFruit}
                    style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
                >
                    Remove
                </button>
            </div>
            <ul style={{ listStyleType: 'disc', textAlign: 'left', display: 'inline-block' }}>
                {fruits.map((fruit, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default DisplayList;