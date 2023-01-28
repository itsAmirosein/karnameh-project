import { ReactElement } from "react";

export interface ProfileProps {
  profile: ProfileContent;
  icon?: ReactElement;
}

interface ProfileContent {
  name: string;
  image: string;
}

export interface ButtonProps {
  title: string;
  variant: "fill" | "outlined";
  onClick: (value: React.MouseEvent<HTMLElement>) => void;
}
