// Function to fetch a random cat fact from the external API
export const fetchCatFact = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const data = await response.json();
    return data;
};

// Function to fetch a random cat image from the external API
export const fetchCatImage = async () => {
    const response = await fetch('https://cataas.com/cat');
    return response.url;
};