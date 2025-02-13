import React from "react";
import Navbar from "@/Components/SSR/Navbar";
import Footer from "./../../Components/SSR/Footer";
import Template from "./../../Components/CSR/template";




export const metadata = {
  title: "All Products",
  description: "Welcome To All Products Page",
};


function layout({ children }) {
  return (
    <Template>
      <div className="w-[98.5vw] bg-[#edebe4] min-h-[100vh]">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </Template>
  );
}

export default layout;
