import {
  SingleChoiceAnswerDTO,
  SingleChoiceFormInput,
} from "@entities/question/model/question.model";
import { UseFormRegister } from "react-hook-form";

interface Props {
  answer: SingleChoiceAnswerDTO;
  name: "answer";
  register: UseFormRegister<SingleChoiceFormInput>;
}

//TODO: text could not be
export default function SingleChoiceAnswer({ answer, name, register }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="appearance-none cursor-pointer hover:bg-red-200 checked:bg-red-700 checked:active:bg-red-700 checked:focus:bg-red-700 bg-rind focus:outline-none focus:ring-1 focus:ring-red-700"
        type="radio"
        {...register(name, { required: true })}
        value={answer.id}
        id={answer.id}
      />
      <label htmlFor={answer.id} className="select-none cursor-pointer">
        {answer.text}
      </label>
    </div>
  );
}
