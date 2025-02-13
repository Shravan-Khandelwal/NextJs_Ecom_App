"use client";
import TestimonialCard from "./../SSR/TestimonialCard";
import Autoplay from "embla-carousel-autoplay";
import PopUpAnimation from "./PopUpAnimation";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel.jsx";
// /components/ui/carousel
import { useState, useEffect } from "react";

function AutoCarousel() {
  const [Testimonials, setTestimonials] = useState();

  try {
    useEffect(() => {
      async function getData() {
        const res = await fetch("https://dummyjson.com/comments");
        const data = await res.json();
        setTestimonials(data.comments);
      }
      getData();
    }, []);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <>
      <PopUpAnimation>
        <div className="bg-[#f3f2ec] p-10">
          <p className="text-7xl text-center text-black font-semibold py-1">
            TESTIMONIALS
          </p>
          <Carousel
            plugins={[
              Autoplay({
                delay: 1000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-[96vw]  py-10"
          >
            <CarouselContent className="flex gap-20">
              {Testimonials &&
                Testimonials.map((data) => {
                  return (
                    <CarouselItem key={data.id} className="p-5 py-10 basis-1/6">
                      <TestimonialCard
                        TestimonialsData={data}
                      ></TestimonialCard>
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
          </Carousel>
        </div>
      </PopUpAnimation>
    </>
  );
}

export default AutoCarousel;
