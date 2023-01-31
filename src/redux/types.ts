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
  questionImage: string;
  date: Date;
  ID: number;
}
export interface AnswersType {
  responerImage: string;
  responderName: string;
  text: string;
  Like: number;
  dislike: number;
  ID: number;
}

export interface ActionTypes {
  type: string;
  payload: any;
}

interface ModalDataType {
  subject: string;
  description: string;
}
