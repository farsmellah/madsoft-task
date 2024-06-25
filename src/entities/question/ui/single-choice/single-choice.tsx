import {
  SingleChoiceAnswerDTO,
  SingleChoiceQuestionDTO,
} from "@entities/question/model/question.model";
import SingleChoiceAnswer from "./single-choice-answer";
import { useState } from "react";
import Button from "@shared/ui/button/button";

interface Props {
  question: SingleChoiceQuestionDTO;
  toNextQuestion: () => void;
}
export default function SingleChoice({ question, toNextQuestion }: Props) {
  const [selectedAnswerID, setSelectedAnswerID] = useState<string>("");

  function onAnswerClick(answerId: string) {
    setSelectedAnswerID(answerId);
  }

  function renderAnswers(answers: Array<SingleChoiceAnswerDTO>) {
    return answers.map((answer) => (
      <SingleChoiceAnswer
        key={answer.id}
        answer={answer}
        name={"singleChoice"}
        onAnswerClick={onAnswerClick}
        isSelected={selectedAnswerID === answer.id}
      />
    ));
  }

  function onButtonClick(answerId: string) {
    try {
      fetch("http://localhost:3000/api/quiz", {
        method: "POST",
        body: answerId,
      });
    } catch (e) {
      console.log(e);
    }

    setSelectedAnswerID("");
    toNextQuestion();
  }

  const answers = question.answers;
  return (
    <>
      <fieldset className="flex flex-col items-start gap-4">
        <p className="font-bold select-none">{question.text}</p>
        <div className="flex flex-col gap-2">{renderAnswers(answers)}</div>

        <Button
          onClick={() => onButtonClick(selectedAnswerID)}
          isDisabled={selectedAnswerID === ""}
        />
      </fieldset>
    </>
  );
}
