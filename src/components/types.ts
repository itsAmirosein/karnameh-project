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
  variant?: "fill" | "outlined"|'plain';
  onClick: (value: React.MouseEvent<HTMLElement>) => void;
  hasIcon?: boolean;
  size?: "lg" | "md";
}

export interface ListItemProps {
  listItem: ListItem;
  commentsLength:number;
  onClick:(ID:number)=>void
}

interface ListItem {
  personImage: string;
  title: string;
  text: string;
  questionImage: string;
  date: Date;
  ID: number;
}

export interface ModalProps{
  title:string,
  onClose:()=>void,
  onConfirm:(e:React.MouseEvent<HTMLElement, MouseEvent>)=>void,
  onCancel:(e:React.MouseEvent<HTMLElement, MouseEvent>)=>void,
  content:ReactElement,

}

export interface HeaderProps{
  newQuestionClick:()=>void
}