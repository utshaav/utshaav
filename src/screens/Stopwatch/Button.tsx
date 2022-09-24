import * as React from "react";

type ButtonProps = {
  title: string;
  onClick: () => void;
  color?: "primary" | "warning" | "success" | "danger";
};

function Button({ title, onClick, color = "primary" }: ButtonProps) {
  let buttonClass = "btn button btn-outline-" + color;
  return (
    // <span className={"button"} onClick={() => onClick()}>
    //   {title}
    // </span>
    <button type="button"  onClick={() => onClick()} className={buttonClass}>{title}</button>
  );
}

export default Button;
