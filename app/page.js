import React from "react";
import Navbar from "@/Components/SSR/Navbar";
import Template from "@/Components/CSR/template";
import Hero from "@/Components/SSR/Hero";
import Carsoul from "@/Components/SSR/Carsoul";
import TrendingCategories from "@/Components/SSR/TrendingCategories";
import AutoCarousel from "../Components/CSR/AutoCarousel";
import Footer from "./../Components/SSR/Footer";


function page() {
  return (
    <>
      <div>
        <Template>
          <div className=" bg-[#f3f2ec] ">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>
          <Carsoul></Carsoul>
          <TrendingCategories></TrendingCategories>
          <AutoCarousel />
          <Footer />
        </Template>
      </div>
    </>
  );
}

export default page;
