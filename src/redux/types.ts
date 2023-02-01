export interface InitialState {
  profile: ProfileType;
  questionsLists: QuestionsType[];
  answersLists: AnswersType[];
  modalVisibility: boolean;
  modalData: ModalDataType;
  param?: number;
}

export interface ProfileType {
  name: string;
  image: string;
}

export interface QuestionsType {
  personImage: string;
  title: string;
  text: string;
  date: Date;
  ID: number;
}
export interface AnswersType {
  personImage: string;
  name: string;
  text: string;
  like: number;
  dislike: number;
  Q_ID:number
  ID: number;
  date: Date;

}

export interface ActionTypes {
  type: string;
  payload: any;
}

interface ModalDataType {
  subject: string;
  description: string;
}
