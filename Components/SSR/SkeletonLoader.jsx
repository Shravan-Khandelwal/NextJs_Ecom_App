import React from "react";

function SkeletonLoader() {
  return (
    <div className="flex h-[100vh] justify-around items-center">
      <div className="flex h-[100vh] bg-[#f3f2ec] p-5   w-52 flex-col gap-4">
        <div className="skeleton bg-[#979276]  h-32 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-28"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
      </div>
      <div className="flex h-[70vh]  bg-[#f3f2ec]  p-5 w-52 flex-col gap-4">
        <div className="skeleton bg-[#979276]  h-32 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-28"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
      </div>
      <div className="flex h-[70vh]  bg-[#f3f2ec]  p-5 w-52 flex-col gap-4">
        <div className="skeleton bg-[#979276]  h-32 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-28"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
      </div>
      <div className="flex h-[70vh]  bg-[#f3f2ec]  p-5 w-52 flex-col gap-4">
        <div className="skeleton bg-[#979276]  h-32 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-28"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
      </div>
      <div className="flex h-[70vh]  bg-[#f3f2ec]  p-5 w-52 flex-col gap-4">
        <div className="skeleton bg-[#979276]  h-32 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-28"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
        <div className="skeleton bg-[#979276]  h-4 w-full"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
