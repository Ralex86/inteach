// @flow
import React from "react";
import gear from "../../assets/gear.png";
import trash from "../../assets/trash.png";

function Icon(props: { name: string, onClick: ?Function, style: any }) {
  const { onClick, name, style } = props;
  const src = name === "gear" ? gear : trash;

  return (
    <img
      src={src}
      alt="Logo"
      onClick={onClick && onClick}
      style={{ ...style, cursor: "pointer" }}
    />
  );
}

export default Icon;
