import React, { useRef, useEffect } from 'react';
import CatImage from './components/CatImage';
import CatFact from './components/CatFact';
import { FaSyncAlt } from 'react-icons/fa';

// Main App component
const App = () => {
    const catImageRef = useRef(null);
    const catFactRef = useRef(null);

    // Function to fetch new cat image and fact
    const fetchCatData = () => {
        catImageRef.current?.fetchImage();
        catFactRef.current?.fetchFact();
    };

    useEffect(() => {
        fetchCatData();
    }, []);

    return (
        <div className="container">
            <h1>Welcome to my simple website!</h1>
            <div className="content">
                <CatImage ref={catImageRef} />
                <CatFact ref={catFactRef} />
            </div>
            <button className="refresh-button" onClick={fetchCatData}>
                <FaSyncAlt />
            </button>
        </div>
    );
}

export default App;