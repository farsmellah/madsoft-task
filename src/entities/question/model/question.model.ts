export interface QuestionBaseDTO {
  id: string;
  type: "single_choice" | "multiple_choice" | "short_text" | "long_text";
  text: string;
}

/*Single Choice Types*/
export interface SingleChoiceQuestionDTO extends QuestionBaseDTO {
  type: "single_choice";
  answers: Array<SingleChoiceAnswerDTO>;
}

export interface SingleChoiceAnswerDTO {
  id: string;
  text: string;
}

export interface SingleChoiceFormInput {
  answer: string;
}

export interface SingleChoiceSubmissionDTO {
  type: "single_choice";
  answer: string;
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

export interface MultipleChoiceFormInput {
  [key: string]: string;
}

export interface MultipleChoiceSubmissionDTO {
  type: "multiple_choice";
  answer: MultipleChoiceFormInput;
}

/**/

/*Short Text Type*/
export interface ShortTextQuestionDTO extends QuestionBaseDTO {
  type: "short_text";
}

export interface ShortTextFormInput {
  text: string;
}

export interface ShortTextSubmissionDTO {
  type: "short_text";
  answer: string;
}
/**/

/*Long Text Type*/
export interface LongTextQuestionDTO extends QuestionBaseDTO {
  type: "long_text";
}

export interface LongTextFormInput {
  text: string;
}

export interface LongTextSubmissionDTO {
  type: "long_text";
  answer: string;
}
/**/

/*Question DTO*/
export type QuestionDTO =
  | SingleChoiceQuestionDTO
  | MultipleChoiceQuestionDTO
  | ShortTextQuestionDTO
  | LongTextQuestionDTO;
