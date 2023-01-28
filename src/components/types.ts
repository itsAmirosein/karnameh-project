import { ReactElement } from "react";

export interface ProfileProps {
  profile: ProfileContent;
  icon?: ReactElement;
}

interface ProfileContent {
  fullName: string;
  image: string;
}
