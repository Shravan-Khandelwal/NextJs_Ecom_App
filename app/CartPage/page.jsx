"use client";
import React from "react";
import { useContext, useState } from "react";
import { AppContext } from "./../../Store/AppContext";
import Image from "next/image";
import Link from "next/link";
import Table from "./../../Components/SSR/Table";

function CartPage() {
  const ContextData = useContext(AppContext);

  const [isCheckOut, setisCheckOut] = useState(false);

  function handleCheckOutBtn() {
    setisCheckOut(true);
  }

  function handleDeleteBtn(id) {
    ContextData.DeleteElementsByID();
  }

  function handleBackBtn() {
    
    setisCheckOut(false);
  }

  if (ContextData.CartArray.length == 0) {
    return (
      <p className="text-7xl flex justify-center item-center text-center font-bold min-h-[10vh]">
        CART IS EMPTY
      </p>
    );
  }

  return (
    <>
      <p className="text-7xl text-center font-bold min-h-[10vh]">Cart Page</p>

      {isCheckOut && (
        <div className="z-40 p-5 rounded-xl bg-[#a4acb2] justify-center overflow-y-scroll mx-auto items-center absolute left-[30vw] top-[35vh]   w-[45vw] h-[40vh]  ">
          <Table Data={ContextData.CartArray}></Table>
          <button className="btn btn-outline  text-black" onClick={() =>handleBackBtn()}>Back</button>
        </div>
      )}
      <div className={`flex z-10 ${isCheckOut && "opacity-25"} justify-center`}>
        <div
          className="relative w-screen max-w-5xl border border-gray-600   sm:px-6 lg:px-8"
          aria-modal="true"
          role="dialog"
          tabIndex="-1"
        >
          <div className="mt-4 overflow-y-scroll max-h-[70vh] space-y-6">
            <ul className="space-y-4">
              {ContextData.CartArray.map((item) => {
                return (
                  <li
                    key={item.Product.id}
                    className="flex shadow-md shadow-gray-300 items-center gap-6"
                  >
                    <Image
                      src={item.Product?.images[0]}
                      alt="Loading"
                      width={100}
                      height={70}
                    />

                    <div className="flex w-full flex-col gap-4">
                      <h3 className="text-3xl text-gray-900">
                        {item.Product.title}
                      </h3>

                      <div className="flex p-4 w-full gap-4">
                        <button className="btn bg-[#aecbb7] badge">
                          Price: ${item.Product.price}
                        </button>
                        <button className="btn bg-[#9d9467] badge">
                          Rating: {item.Product.rating}
                        </button>
                        <button className="btn bg-[#85b0a7] badge">
                          Quantity: {item.Quantity}
                        </button>
                        <button className="btn bg-[#72d2ae] badge">
                          Category: {item.Product.category}
                        </button>
                      </div>
                    </div>
                    <button
                      disabled={isCheckOut}
                      className="btn bg-gray-400 mt-9 badge"
                      onClick={() => handleDeleteBtn(item.Product.id)}
                    >
                      Remove From Cart
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="space-y-4 text-center">
              <button
                disabled={isCheckOut}
                onClick={() => handleCheckOutBtn()}
                className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </button>

              {isCheckOut == false && (
                <Link
                  href="/"
                  className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
                >
                  Continue shopping
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
