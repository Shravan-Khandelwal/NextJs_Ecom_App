"use client";
import Image from "next/image";
import { useContext, useState } from "react";
import { AppContext } from "./../../Store/AppContext";
import Link from "next/link";

function ProductPageCard({ itemDetails }) {
  const { AddItemsToCart, CartArray, showingToast } = useContext(AppContext);

  function handleAddToCartBtn(itemDetails) {
    showingToast("Item Added to Cart Successfully!");
    AddItemsToCart(itemDetails);
    console.log(CartArray);
  }

  return (
    <div className="card bg-[#f3f2ec] hover:cursor-pointer h-[80vh] hover:bg-[#aaccc7]  w-72  shadow-xl">
      <Link href={{ pathname: `/SingleProductPage/${itemDetails.id}` }}>
        <figure>
          <Image
            src={itemDetails?.thumbnail}
            alt="Shoes"
            width={200}
            height={100}
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{itemDetails.title}</h2>
        <p>{itemDetails.description}</p>
        <div className="flex w-[16vw] justify-between items-center ">
          <button
            onClick={() => handleAddToCartBtn(itemDetails)}
            title=""
            className="text-white bg-[#8a85bd] mt-4 sm:mt-0 bg-primary-700 hover:text-black hover:bg-white focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>

          <button className="btn bg-[#a4c3ce] btn-sm">
            {itemDetails.category.toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPageCard;
