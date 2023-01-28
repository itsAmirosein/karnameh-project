import React from "react";
import { ButtonProps } from "./types";

function Button({ onClick, title, variant }: ButtonProps) {
  return <button className={`rounded-md border border-Green px-6 py-1 ${variant==='fill'?'text-white bg-Green':'text-Green'}`} onClick={onClick}>{title}</button>;
}

export default Button;
