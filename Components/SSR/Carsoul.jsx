import React from "react";
import Card from "./Card";
import ScrollAnimation from "../CSR/ScrollAnimation.jsx";

async function Carsoul() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();

    return (
      <>
        <div className=" bg-[#edebe4] min-h-[80vh]">
          <p className="text-8xl py-7  text-gray-800 font-bold text-center">
            SHOP NOW🛒
          </p>
          <ScrollAnimation className="carousel  max-w-full  rounded-none">
            <div>
              <div className="div flex  gap-5 py-9 rounded-none">
                {data.products &&
                  data.products.map((item) => {
                    return <Card key={item.id} itemDetails={item}></Card>;
                  })}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </>
    );
  } catch (error) {
    console.log(error.message);
  }
}

export default Carsoul;
