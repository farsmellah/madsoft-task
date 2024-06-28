import {
  MultipleChoiceQuestionDTO,
  MultipleChoiceAnswerDTO,
  MultipleChoiceFormInput,
  MultipleChoiceSubmissionDTO,
} from "@entities/question/model/question.model";
import MultipleChoiceAnswer from "./multiple-choice-answer";
import Button from "@shared/ui/button/button";
import { useForm } from "react-hook-form";

interface Props {
  question: MultipleChoiceQuestionDTO;
  toNextQuestion: () => void;
}
export default function MultipleChoice({ question, toNextQuestion }: Props) {
  const { register, handleSubmit, formState, getValues } =
    useForm<MultipleChoiceFormInput>();

  function validateCheckboxes() {
    const values = getValues(
      question.answers.map((_, index) => `${index + 1}`)
    );

    const isValid = values?.some((v: any) => v === true);

    return isValid;
  }

  function submitData(data: MultipleChoiceFormInput) {
    const DTO: MultipleChoiceSubmissionDTO = {
      type: "multiple_choice",
      answer: data,
    };

    try {
      fetch("http://localhost:3000/api/quiz", {
        method: "POST",
        body: JSON.stringify(DTO),
      });
    } catch (e) {
      console.log(e);
    }

    toNextQuestion();
  }

  function renderAnswers(answers: Array<MultipleChoiceAnswerDTO>) {
    return answers.map((answer) => (
      <MultipleChoiceAnswer
        key={answer.id}
        answer={answer}
        registerAnswer={() =>
          register(answer.id, {
            validate: validateCheckboxes,
          })
        }
      />
    ));
  }

  const answers = question.answers;
  return (
    <>
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={handleSubmit(submitData)}
      >
        <p className="font-bold select-none">{question.text}</p>
        <div className="flex flex-col gap-2">{renderAnswers(answers)}</div>

        <Button isDisabled={!formState.isValid} />
      </form>
    </>
  );
}
