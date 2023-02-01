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
  variant?: "fill" | "outlined" | "plain";
  onClick: (value: React.MouseEvent<HTMLElement>) => void;
  icon?: ReactElement;
  size?: "lg" | "md";
  style?: string;
}

export interface ListItemProps {
  listItem: ListItem;
  commentsLength?: number;
  onMoreDetailsClick?: (ID: number) => void;
  questionCart: boolean;
  onlikeOrDislikeClick?: (ID:number , value:boolean) => void;
}

interface ListItem {
  personImage: string;
  title?: string;
  name?: string;
  text: string;
  date: Date;
  ID: number;
  like?: number;
  dislike?: number;
  Q_ID?:number
}

export interface ModalProps {
  title: string;
  onClose: () => void;
  onConfirm: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onCancel: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  content: ReactElement;
}

export interface HeaderProps {
  newQuestionClick: () => void;
  title: string;
  profile: {
    name: string;
    image: string;
  };
}
