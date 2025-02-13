import React from "react";
import PopUpAnimation from "./../CSR/PopUpAnimation";
import Spline from "@splinetool/react-spline/next";

function Hero() {
  return (
    <>
      <p className="h-60 w-60 bg-[#a39a64] rounded-full absolute left-[140px] top-[-180px] z-0"></p>
      <div className="relative  right-[-1230px] top-[70px] mt-4 ml-4 -rotate-45 w-[50px] h-[50px] bg-[#9698e8]">
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] ml-[25px]"></div>{" "}
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] -mt-[25px]"></div>{" "}
      </div>

      <div
        className="absolute top-[30em] left-[73rem]  w-0 h-0 border-t-[50px] 
 border-t-transparent border-solid border-x-transparent  border-x-[3em]  
 border-b-[1.25em] border-[#9a93ad]

afte:content-none after:absolute after:left-[-3em] after:top-[1.25em]
after:h-0 after:w-0 after:border-b-[3em] after:border-solid 
after:border-x-transparent after:border-b-transparent after:border-x-[3em] 
after:border-t-[4.4em] after:border-t-black
"
      ></div>

      <div className="absolute  right-[123px] top-[70px] mt-4 ml-4 -rotate-45 w-[50px] h-[50px] bg-[#9698e8]">
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] ml-[25px]"></div>{" "}
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] -mt-[25px]"></div>{" "}
      </div>

      <div className="absolute  right-[123px] top-[40rem] mt-4 ml-4 -rotate-45 w-[50px] h-[50px] bg-[#9698e8]">
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] ml-[25px]"></div>{" "}
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] -mt-[25px]"></div>{" "}
      </div>
      <div className="absolute  right-[30px] top-[45rem] mt-4 ml-4 -rotate-45 w-[50px] h-[50px] bg-[#9698e8]">
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] ml-[25px]"></div>{" "}
        <div className="absolute w-[50px] rounded-full h-[50px] bg-[#9698e8] -mt-[25px]"></div>{" "}
      </div>

      <PopUpAnimation className="hover:text-black hover:cursor-pointer">
        <p className="text-center z-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500 absolute left-[29vw] top-[10vh]  leading-loose  text-6xl font-extrabold">

        QUICK PICK MARKET
          {/* GIGGLES n’ WIGGLES */}
        </p>
      </PopUpAnimation>
      <div className="hero  min-h-screen">
        <div className="hero-content min-h-[80vh]  flex-col lg:flex-row">
          <div className="w-[45rem] h-[20rem] hover:cursor-pointer hover:shadow-xl hover:shadow-red-300">
            <Spline scene="https://prod.spline.design/sbSQe0ZSyWMK89RE/scene.splinecode" />
          </div>
          <div className="text-center flex flex-col justify-center  min-h-[80vh]">
           <p className="text-7xl leading-snug font-bold min-h-[30vh]">
          Deals That Deliver &apos;s Smiles<br />   
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
