import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card({ itemDetails }) {
  return (
    <div className="card bg-[#f3f2ec]  hover:cursor-pointer hover:border-2 hover:border-gray-500  hover:animate-pulse hover:ease-in-out  w-96 shadow-xl">
      <Link
        href={{
          pathname: `/SingleProductPage/${itemDetails.id}`,
        }}
      >
        <figure>
          <Image
            src={itemDetails.thumbnail}
            alt="Shoes"
            width={200}
            height={200}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemDetails.title}</h2>
          <p>{itemDetails.description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{itemDetails.category}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
