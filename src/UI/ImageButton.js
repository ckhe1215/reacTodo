import React from "react";
import "./ImageButton.module.css";

const ImageButton = (props) => {
  return (
    <button>
      <img src={props.src} alt={props.alt} />
    </button>
  );
};

export default ImageButton;
