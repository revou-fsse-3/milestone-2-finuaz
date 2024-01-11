import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardContent, Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// import Autoplay from "embla-carousel-autoplay"

const ContentContainer = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://newsapi.org/v2/everything?q=*&from=2024-01-14&to=2024-01-10&sortBy=popularity&apiKey=24aa8338822147acb0e19ccff2b7ec4d&pageSize=20&domains=wired.com, xkcd.com, seths.blog, macrumors.com, cnet.com, npr.org, readwrite.com, hipertextual.com, hackaday.com, boingboing.net, go.com, ign.com, digitaltrends.com, theatlantic.com, nasa.gov, github.io, greenhouse.io, cohost.org, wikipedia.org');

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
    <div className='mt-16'>
      <div className='m-8'>
        <h1 className='text font-bold text-center text-4xl px-8 text-primary'>Top Recent Headlines</h1>
      </div>
      <Carousel
        className="w-full max-w-6xl h-[60vh] p-4 mx-auto object-cover"
        opts={{
          align: "start",
          loop: true
        }}
        orientation="horizontal"
      >
        <CarouselContent className="h-[60vh] max-w-6xl">
          {newsData.map((article) => (            
              <CarouselItem className='cursor-pointer'>
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 w-[1120px] h-[500px]">
                      <img src={article.urlToImage} className='rounded-lg h-[432px] hover:shadow-2xl shadow-primary object-fill'/>
                      <Separator className='my-4 w-96' />
                      <strong>{article.title}</strong>
                  </CardContent>
              </CarouselItem>            
          ))}
        </CarouselContent>
        <CarouselPrevious className='shadow-lg bg-purple-700 text-slate-100' />
        <CarouselNext className='shadow-lg bg-purple-700 text-slate-100' />
      </Carousel>
    </div>
  )
}

export default ContentContainer