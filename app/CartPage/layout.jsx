import React from "react";
import Navbar from "@/Components/SSR/Navbar";
import Template from "./../../Components/CSR/template";



export const metadata = {
  title: "Cart Page",
  description: "Welcome To Cart Page",
};

function layout({ children }) {
  return (
    <Template>
      <div className="w-[98.5vw] bg-[#edebe4] min-h-[100vh]">
        <Navbar></Navbar>
        {children}
        {/* <Footer></Footer> */}
      </div>
    </Template>
  );
}

export default layout;
