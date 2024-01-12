    import { Card } from '@/components/ui/card';
    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';   

    const CategoryContainer = () => {
        const [newsData, setNewsData] = useState([]);
        const {category} = useParams();

        useEffect(() => {
            console.log('Category:', category);
        
            const fetchData = async () => {
                try {
                    const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&apiKey=24aa8338822147acb0e19ccff2b7ec4d`);
        
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
        
                    const data = await response.json();
                    console.log('API Data:', data); // Log the API data
                    setNewsData(data.articles);
                } catch (error) {
                    console.error('Fetch error:', error);
                }
            };
        
            fetchData(); 
        }, [category]);
        

        return (
            <>
                <div className='m-12'>
                    <h1 className='text-primary  font-semibold text-center text-3xl'>Top Headlines from {category} Category</h1>
                </div>
                {newsData.map((article) => (            
                    <Card className='grid grid-cols-7 gap-4 my-8 mx-8'>

                            <div className='p-8 pr-0 col-span-2 font-medium'>   
                                <strong>{article.title}</strong>
                            </div>
                            <div className='p-8 pl-0 font-light'>
                                <p className='italic'>{article.author}</p>
                            </div>
                            <div className='p-8 col-span-4'>
                                <p>{article.description}</p>
                            </div>
                                
                    </Card>
                ))}
            </>
        )
    }

    export default CategoryContainer