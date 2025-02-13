import React from "react";
import Navbar from "./../../Components/SSR/Navbar";
import Footer from "./../../Components/SSR/Footer";
import Template from "./../../Components/CSR/template";

export const metadata = {
  title: "Single Product Page",
  description: "Welcome To Single Product Page",
};


function layout({ children }) {
  return (
    <Template>
      <div>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </div>
    </Template>
  );
}

export default layout;
