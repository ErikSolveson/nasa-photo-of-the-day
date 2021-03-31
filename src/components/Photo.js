import React from "react";
import "./Photo.css";

export default function Photo(props) {
  const { photo } = props;
  return (
    <div>
      <p>This is my photo</p>
      <img src={photo} alt="" />
    </div>
  );
}
