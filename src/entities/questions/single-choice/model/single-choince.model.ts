export interface SingleChoiceQuestionDTO {
  text: string;
  type: string;
  answers: Array<SingleChoiceAnswerDTO>;
}

export interface SingleChoiceAnswerDTO {
  text: string;
}
