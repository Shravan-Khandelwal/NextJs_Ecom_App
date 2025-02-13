import React from "react";

function TestimonialCard({ TestimonialsData }) {
  return (
    <div className="card hover:cursor-pointer hover:shadow-xl hover:shadow-red-400 max-h-[30vh] min-h-[30vh] bg-base-100 w-72 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-center">
          {TestimonialsData.user.fullName}
        </h2>
        <p>{TestimonialsData.body}</p>
        <div className="flex items-center  font-semibold px-4 text-lg  justify-center">
          <p>💗Like &apos;s : {TestimonialsData.likes}</p>
          <p>{TestimonialsData.user.username}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
