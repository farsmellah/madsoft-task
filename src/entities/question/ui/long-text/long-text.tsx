import {
  LongTextFormInput,
  LongTextQuestionDTO,
  LongTextSubmissionDTO,
} from "@entities/question/model/question.model";
import Button from "@shared/ui/button/button";
import { useForm } from "react-hook-form";

interface Props {
  question: LongTextQuestionDTO;
  toNextQuestion: () => void;
}
export default function LongText({ question, toNextQuestion }: Props) {
  const { register, handleSubmit, formState } = useForm<LongTextFormInput>();

  function submitData(data: LongTextFormInput) {
    const DTO: LongTextSubmissionDTO = {
      type: "long_text",
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

        <textarea
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              handleSubmit(submitData)();
            }
          }}
          tabIndex={1}
          autoComplete="off"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 focus:border"
          {...register("text", { required: true })}
        />

        <Button isDisabled={!formState.isValid} />
      </form>
    </>
  );
}
