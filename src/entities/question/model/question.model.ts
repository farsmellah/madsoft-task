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

/*Multiple Choice Type*/
export interface MultipleChoiceQuestionDTO extends QuestionBaseDTO {
  answers: Array<MultipleChoiceAnswerDTO>;
}

export interface MultipleChoiceAnswerDTO {
  id: string;
  text: string;
}
/**/

/*Question DTO*/
export type QuestionDTO = SingleChoiceQuestionDTO;
