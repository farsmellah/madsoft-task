import {
  SingleChoiceAnswerDTO,
  SingleChoiceFormInput,
  SingleChoiceQuestionDTO,
  SingleChoiceSubmissionDTO,
} from "@entities/question/model/question.model";
import SingleChoiceAnswer from "./single-choice-answer";
import Button from "@shared/ui/button/button";
import { useForm } from "react-hook-form";

interface Props {
  question: SingleChoiceQuestionDTO;
  toNextQuestion: () => void;
}
export default function SingleChoice({ question, toNextQuestion }: Props) {
  const { register, handleSubmit, formState } =
    useForm<SingleChoiceFormInput>();

  function renderAnswers(answers: Array<SingleChoiceAnswerDTO>) {
    return answers.map((answer) => (
      <SingleChoiceAnswer
        key={answer.id}
        answer={answer}
        name={"answer"}
        register={register}
      />
    ));
  }

  function submitData(data: SingleChoiceFormInput) {
    const DTO: SingleChoiceSubmissionDTO = {
      type: "single_choice",
      answer: data.answer,
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
