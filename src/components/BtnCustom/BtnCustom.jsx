import "./BtnCustom.scss";

import React from "react";

function BtnCustom({ text, onClick, fontSize }) {
  return (
    <button
      className="btn__custom"
      onClick={onClick}
      style={{ fontSize: fontSize ? fontSize : "auto" }}
    >
      {text}
    </button>
  );
}

export default BtnCustom;
