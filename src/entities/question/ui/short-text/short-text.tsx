import {
  ShortTextFormInput,
  ShortTextQuestionDTO,
  ShortTextSubmissionDTO,
} from "@entities/question/model/question.model";
import Button from "@shared/ui/button/button";
import { useForm } from "react-hook-form";

interface Props {
  question: ShortTextQuestionDTO;
  toNextQuestion: () => void;
}
export default function ShortText({ question, toNextQuestion }: Props) {
  const { register, handleSubmit, formState } = useForm<ShortTextFormInput>();

  function submitData(data: ShortTextFormInput) {
    const DTO: ShortTextSubmissionDTO = {
      type: "short_text",
      answer: data.text,
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

  return (
    <>
      <form
        className="flex flex-col items-start gap-4"
        onSubmit={handleSubmit(submitData)}
      >
        <p className="font-bold select-none">{question.text}</p>

        <input
          tabIndex={1}
          autoComplete="off"
          type="text"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 focus:border"
          {...register("text", { required: true })}
        />

        <Button isDisabled={!formState.isValid} />
      </form>
    </>
  );
}
