import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { fetchCatFact } from '../services/api';

// Component to display a random cat fact
const CatFact = forwardRef((props, ref) => {
    const [fact, setFact] = useState('');

    // Function to fetch a random cat fact
    const fetchFact = async () => {
        try {
            const data = await fetchCatFact();
            setFact(data.fact);
        } catch (error) {
            console.error('Error fetching cat fact:', error);
        }
    };

    // Expose fetchFact method to parent component
    useImperativeHandle(ref, () => ({
        fetchFact
    }));

    return (
        <div className="fact-container">
            <h2>Random Cat Fact</h2>
            <p>{fact || "Loading..."}</p>
        </div>
    );
});

export default CatFact;