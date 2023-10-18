import React from "react";

function ReusableCard({ imageSrc, title, description, buttonText, className }) {
  return (
    <div
      className={`mx-3 my-5 shadow-xl card w-96 bg-base-100 image-full${className}`}
    >
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default ReusableCard;
