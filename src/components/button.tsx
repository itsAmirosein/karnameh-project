import React from "react";
import { ButtonProps } from "./types";
import { FaPlus } from "react-icons/fa";

function Button({
  onClick,
  title,
  variant = "outlined",
  hasIcon = false,
  size = "md",
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-md border border-Green ${
        size === "md" ? "w-[126px]" : "w-[200px]"
      } py-2 ${variant === "fill" ? "text-white bg-Green" : "text-Green"}`}
      onClick={onClick}
    >
      <span className="mx-1 text-[12px] font-semibold">{title}</span>
      {hasIcon && <FaPlus className="mx-1 text-xs mt-0.5" />}
    </button>
  );
}

export default Button;
