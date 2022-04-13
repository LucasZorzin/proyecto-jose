import "./BtnCustom.scss";

import React from "react";

function BtnCustom({ text, onClick }) {
  return (
    <button className="btn__custom" onClick={onClick}>
      {text}
    </button>
  );
}

export default BtnCustom;
