import React from "react";
import AnimatedLink from "./../CSR/Animation";
import Link from "next/link";
import CartIcon from "./../CSR/CartIcon";
function Navbar() {



  return (
    <div className="navbar bg-transparent rounded-t-2xl text-2xl  px-8 py-2">
      <div className="flex-1">
        <AnimatedLink className="btn btn-ghost text-xl"><Link href="/">HOME </Link></AnimatedLink>
      </div>
      <div className="flex item-center gap-5">
        <div className="flex justify-evenly item-center gap-9">
          <AnimatedLink>
            <Link href="/AllProducts"> <p className="mt-2" >ALL PRODUCTS</p> </Link>
          </AnimatedLink>
          {/* <AnimatedLink> <p className="mt-2" >TESTIMONIALS</p></AnimatedLink> */}
          <AnimatedLink>
          <CartIcon></CartIcon>
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
