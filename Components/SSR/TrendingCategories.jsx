import React from "react";
import Image from "next/image";
import PopUpAnimation from "./../CSR/PopUpAnimation";

function TrendingCategories() {
  return (
    //
    // 
    // bg-gradient-to-r from-indigo-400 to-cyan-400
    <div className="min-h-[100vh]  bg-[url('https://plus.unsplash.com/premium_photo-1664297834135-776f65cc39b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-cover bg-no-repeat flex flex-col gap-8 ">
      <PopUpAnimation>
        <p className="text-8xl mt-9 font-semibold text-center text-gray-700 ">
          TRENDING CATEGORIES!
        </p>
      </PopUpAnimation>
      <div className="content w-full flex justify-end gap-32 flex-wrap">
        {/* <PopUpAnimation>
          <div className="artboard max-h-[60vh] phone-1 bg-slate-400">
            <Image
              alt="dsdsd"
              src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" relative rounded-lg shadow-2xl min-h-[60vh]"
              width={400} // Set the appropriate width
              height={820}
            />

            <div className="absolute top-[117rem] left-40 text-4xl text-white">
              T-SHIRTS
            </div>
          </div>
        </PopUpAnimation> */}

        <PopUpAnimation>
          <div className="artboard max-h-[60vh] phone-1 bg-slate-400">
            <Image
              alt="dsdsd"
              src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" relative rounded-lg shadow-2xl min-h-[60vh]"
              width={400} // Set the appropriate width
              height={820}
            />
            <div className="absolute top-[117rem] left-[45rem] text-4xl font-semibold text-black">
              T-SHIRTS
            </div>
          </div>
        </PopUpAnimation>

        <PopUpAnimation>
          <div className="artboard mr-8 max-h-[60vh] phone-1 bg-slate-400">
            <Image
              alt="dsdsd"
              src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=" bg-transparent relative rounded-lg shadow-2xl min-h-[60vh]"
              width={400} // Set the appropriate width
              height={820}
            />
            <div className="absolute top-[117rem] left-[73rem] text-4xl font-semibold text-black">
              T-SHIRTS
            </div>
          </div>
        </PopUpAnimation>
      </div>
    </div>
  );
}

export default TrendingCategories;
