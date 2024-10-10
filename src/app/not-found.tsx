import Image from "next/image";
import React from "react";
import Zero from "../../public/not-found-zero.svg";

const NotFound = () => {
  return (
    <div className="notFound__container">
      <h2 className="notFound__title">Ой, щось пішло не так</h2>
      <p className="notFound__text">
        <span>4</span>
        <Image
          className="notFound__img"
          src={Zero}
          alt="0"
          width={197}
          height={203}
        />
        <span>4</span>
      </p>
    </div>
  );
};

export default NotFound;
