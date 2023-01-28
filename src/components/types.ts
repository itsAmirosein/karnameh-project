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
  variant?: "fill" | "outlined";
  onClick: (value: React.MouseEvent<HTMLElement>) => void;
  hasIcon?: boolean;
  size?: "lg" | "md";
}

export interface ListItemProps {
  listItem: ListItem;
  commentsLength:number
}

interface ListItem {
  personImage: string;
  title: string;
  text: string;
  questionImage: string;
  date: Date;
  ID: number;
}
