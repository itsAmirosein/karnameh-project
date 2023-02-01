import React from "react";
import { ButtonProps } from "./types";

function Button({
  onClick,
  title,
  variant = "outlined",
  icon,
  size = "md",
  style
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-md  border-Green ${
        size === "md" ? "w-[126px]" : "w-[200px]"
      } py-2 ${variant === "fill" ? "text-white bg-Green" : "text-Green"} ${variant!=='plain'&&'border'}  ${style} `}
      onClick={onClick}
    >
      <span className="mx-1 text-[12px] font-semibold">{title}</span>
      {icon}
    </button>
  );
}

export default Button;
