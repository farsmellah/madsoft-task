import { MultipleChoiceAnswerDTO } from "@entities/question/model/question.model";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  answer: MultipleChoiceAnswerDTO;
  registerAnswer: () => UseFormRegisterReturn;
}

export default function MultipleChoiceAnswer({
  answer,
  registerAnswer,
}: Props) {
  return (
    <label
      htmlFor={answer.id}
      className="select-none cursor-pointer flex items-center gap-2 py-1"
    >
      <input
        className="appearance-none cursor-pointer hover:bg-red-200 checked:bg-red-700 checked:hover:bg-red-700 checked:active:bg-red-700 checked:focus:bg-red-700 bg-rind focus:outline-none focus:ring-1 focus:ring-red-700"
        type="checkbox"
        {...registerAnswer()}
        id={answer.id}
      />
      {answer.text}
    </label>
  );
}
