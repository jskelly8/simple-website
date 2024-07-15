import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { fetchCatImage } from '../services/api';

// Component to display a random cat image
const CatImage = forwardRef((props, ref) => {
    const [image, setImage] = useState('');

    // Function to fetch a random cat image
    const fetchImage = async () => {
        try {
            const imageUrl = await fetchCatImage();
            setImage(`${imageUrl}?t=${new Date().getTime()}`);
        } catch (error) {
            console.error('Error fetching cat image:', error);
        }
    };

    // Expose fetchImage method to parent component
    useImperativeHandle(ref, () => ({
        fetchImage
    }));

    return (
        <div className="image-container">
            <h2>Random Cat Image</h2>
            <img src={image} alt="A random cat" />
        </div>
    );
});

export default CatImage;