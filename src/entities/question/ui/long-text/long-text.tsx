import { LongTextQuestionDTO } from "@entities/question/model/question.model";
import { useState } from "react";
import Button from "@shared/ui/button/button";

interface Props {
  question: LongTextQuestionDTO;
  toNextQuestion: () => void;
}
export default function LongText({ question, toNextQuestion }: Props) {
  const [answerText, setAnswerText] = useState("");

  function onAnswerChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnswerText(e.target.value);
  }

  function onButtonClick(answerData: string) {
    try {
      fetch("http://localhost:3000/api/quiz", {
        method: "POST",
        body: JSON.stringify(answerData),
      });
    } catch (e) {
      console.log(e);
    }

    toNextQuestion();
  }

  return (
    <>
      <fieldset className="flex flex-col items-start gap-4">
        <p className="font-bold select-none">{question.text}</p>

        <textarea
          tabIndex={1}
          autoComplete="off"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:ring-red-500 focus:border-red-500 focus:border"
          name="answer"
          value={answerText}
          onChange={onAnswerChange}
        />

        <Button
          onClick={() => onButtonClick(answerText)}
          isDisabled={!answerText}
        />
      </fieldset>
    </>
  );
}
