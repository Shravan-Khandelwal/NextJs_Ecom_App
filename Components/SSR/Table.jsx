"use client";
import { useContext, useState } from "react";
import { AppContext } from "./../../Store/AppContext";
import Link from "next/link";

function Table({ Data }) {
  const { setCartArray, showingPaymentDone } = useContext(AppContext);

  function handleCheckOutBtn() {
    setCartArray([]);
    showingPaymentDone("Your Purchase Has Been Done Successfully!! ");
  }

  function FinalPrice() {
    let Price = 0;
    let TotalPrice = 0;

    Data.map((item) => {
      Price = item.Product.price * item.Quantity;
      TotalPrice = Price + TotalPrice;
    });

    return TotalPrice.toFixed(2);
  }

  return (
    <div className="overflow-x-auto ">
      <p className="text-4xl text-center text-white font-semibold py-1">
            FINAL BILL 💵💵
          </p>
      <table className="table text-lg  table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>S No.</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {Data &&
            Data.map((item, id) => {
              {
                var price = item.Product.price * item.Quantity;
                var totalPrice = price + totalPrice;
              }
              return (
                <tr key={item.Product.id}>
                  <th>{id + 1}</th>
                  <td>{item.Product.title}</td>
                  <td>$ {price.toFixed(2)}</td>
                  <td>{item.Quantity}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Link href="/">
      <button
        onClick={() => handleCheckOutBtn()}
        className="btn btn-wide flex mx-auto mt-5"
      >
       Pay ${FinalPrice()}
      </button>
      </Link>
    </div>
  );
}

export default Table;
