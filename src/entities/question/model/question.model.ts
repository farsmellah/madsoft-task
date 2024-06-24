export interface QuestionBaseDTO {
  id: string;
  type: string;
  text: string;
}

/*Single Choice Type*/
export interface SingleChoiceQuestionDTO extends QuestionBaseDTO {
  answers: Array<SingleChoiceAnswerDTO>;
}

export interface SingleChoiceAnswerDTO {
  id: string;
  text: string;
}
/**/

/*Question DTO*/
export type QuestionDTO = SingleChoiceQuestionDTO;
