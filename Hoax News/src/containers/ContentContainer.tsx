import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardContent, Card } from "@/components/ui/card"
// import Autoplay from "embla-carousel-autoplay"

const Carousels = () => {
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

      fetchData(); 
  }, []);

  return (
    <div className='mt-24'>
      <div className='m-8'>
        <h1 className='text font-bold text-center text-4xl px-8'>Top 10 Technology Headlines</h1>
      </div>
      <Carousel
        className="w-full max-w-6xl h-[60vh] p-4 ml-12"
        opts={{
          align: "start",
          loop: true
        }}
        orientation="horizontal"
      >
        <CarouselContent className="h-[60vh]">
          {newsData.map((article, index) => (
            <div className="p-1">
              <CarouselItem>
                <Card key={index} className='w-[1100px] h-[600px]'>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                      <strong>{article.title}</strong>
                      <Card className='border'>
                        <p>{article.description}</p>
                      </Card>
                  </CardContent>
                </Card>
              </CarouselItem>
            </div>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Carousels

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

        fetchData(); 
    }, []);

    return (
        <div>
            <h2>Top 10 Technology Headlines</h2>
            <ul>
                {newsData.map((article, index) => (
                    <li key={index}>
                        <strong>{article.title}</strong>
                        <p>{article.description}</p>
                        <p>{article.url}</p>
                        <p>{article.author}</p>
                        <p>{article.urlToImage}</p>
                        <p>{article.publishedAt}</p>
                        <p>{article.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// export default ContentContainer;
