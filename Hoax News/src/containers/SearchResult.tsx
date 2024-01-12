import { Card } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';

interface Props {
    query? : string
}

const SearchResult = ({query = '*'} : Props) => {
    const [newsData, setNewsData] = useState([]);
    // const query = 'world';


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2024-01-14&to=2024-01-10&sortBy=popularity&apiKey=24aa8338822147acb0e19ccff2b7ec4d&pageSize=20&domains=wired.com, xkcd.com, seths.blog, macrumors.com, cnet.com, npr.org, readwrite.com, hipertextual.com, hackaday.com, boingboing.net, go.com, ign.com, digitaltrends.com, theatlantic.com, nasa.gov, github.io, greenhouse.io, cohost.org, wikipedia.org`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setNewsData(data.articles);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchData(); 
    }, []);

    return (
        <>
            <div className='m-12'>
                <h1 className='text-primary  font-semibold text-center text-3xl'>Search Result</h1>
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

export default SearchResult