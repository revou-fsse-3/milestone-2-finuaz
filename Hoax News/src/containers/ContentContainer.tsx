import React, { useState, useEffect } from 'react';

const ContentContainer = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?apiKey=24aa8338822147acb0e19ccff2b7ec4d&category=technology&pageSize=10');

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setNewsData(data.articles);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData(); // Call the fetch function here

        // Optional: Cleanup function if needed (e.g., canceling ongoing requests)
        // return () => { /* cleanup code */ };
    }, []); // Empty dependency array means useEffect runs once after the initial render

    return (
        <div>
            <h2>Top 10 Technology Headlines</h2>
            <ul>
                {newsData.map((article, index) => (
                    <li key={index}>
                        <strong>{article.title}</strong>
                        <p>{article.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContentContainer;
