export interface QuestionBaseDTO {
  id: string;
  type: "single_choice" | "multiple_choice" | "short_text" | "long_text";
  text: string;
}

/*Single Choice Type*/
export interface SingleChoiceQuestionDTO extends QuestionBaseDTO {
  type: "single_choice";
  answers: Array<SingleChoiceAnswerDTO>;
}

export interface SingleChoiceAnswerDTO {
  id: string;
  text: string;
}
/**/

/*Multiple Choice Type*/
export interface MultipleChoiceQuestionDTO extends QuestionBaseDTO {
  type: "multiple_choice";
  answers: Array<MultipleChoiceAnswerDTO>;
}

export interface MultipleChoiceAnswerDTO {
  id: string;
  text: string;
}
/**/

/*Short Text Type*/
export interface ShortTextQuestionDTO extends QuestionBaseDTO {
  type: "short_text";
}
/**/

/*Short Text Type*/
export interface LongTextQuestionDTO extends QuestionBaseDTO {
  type: "long_text";
}
/**/

/*Question DTO*/
export type QuestionDTO =
  | SingleChoiceQuestionDTO
  | MultipleChoiceQuestionDTO
  | ShortTextQuestionDTO
  | LongTextQuestionDTO;
