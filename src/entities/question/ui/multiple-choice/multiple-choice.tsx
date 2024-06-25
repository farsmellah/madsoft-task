import {
  MultipleChoiceQuestionDTO,
  MultipleChoiceAnswerDTO,
} from "@entities/question/model/question.model";
import MultipleChoiceAnswer from "./multiple-choice-answer";
import { useState } from "react";
import Button from "@shared/ui/button/button";

interface Props {
  question: MultipleChoiceQuestionDTO;
  toNextQuestion: () => void;
}
export default function MultipleChoice({ question, toNextQuestion }: Props) {
  const [answerData, setAnswerData] = useState<{ [key: string]: boolean }>(
    question.answers.reduce((acc, answer) => {
      acc[answer.id] = false;
      return acc;
    }, {} as { [key: string]: boolean })
  );
  const [isTouched, setIsTouched] = useState(false);

  function onAnswerClick(answerId: string) {
    setAnswerData((prev) => ({ ...prev, [answerId]: !prev[answerId] }));
    setIsTouched(true);
  }

  function onButtonClick(answerData: { [key: string]: boolean }) {
    const answerIds = Object.keys(answerData).filter(
      (answerId) => answerData[answerId]
    );
    try {
      fetch("http://localhost:3000/api/quiz", {
        method: "POST",
        body: JSON.stringify(answerIds),
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
        name={"multipleChoice"}
        onAnswerClick={onAnswerClick}
        isSelected={answerData[answer.id]}
      />
    ));
  }

  const answers = question.answers;
  return (
    <>
      <fieldset className="flex flex-col items-start gap-4">
        <p className="font-bold select-none">{question.text}</p>
        <div className="flex flex-col gap-2">{renderAnswers(answers)}</div>

        <Button
          onClick={() => onButtonClick(answerData)}
          isDisabled={!isTouched}
        />
      </fieldset>
    </>
  );
}
