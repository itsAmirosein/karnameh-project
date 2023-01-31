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
  commentsLength?:number;
  onClick?:(ID:number)=>void,
  questionCart:boolean
}

interface ListItem {
  personImage: string;
  title?: string;
  name?:string
  text: string;
  questionImage: string;
  date: Date;
  ID: number;
  like?:number
  disLiske?:number
  likeOrDislikeClick?:(value:boolean)=>void
}

export interface ModalProps{
  title:string,
  onClose:()=>void,
  onConfirm:(e:React.MouseEvent<HTMLElement, MouseEvent>)=>void,
  onCancel:(e:React.MouseEvent<HTMLElement, MouseEvent>)=>void,
  content:ReactElement,

}

export interface HeaderProps{
  newQuestionClick:()=>void,
  title:string
  profile:{
    name:string,
    image:string
  }
}