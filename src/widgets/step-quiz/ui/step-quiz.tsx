import { SingleChoice } from "@entities/question/index";
import { questions, time } from "@widgets/step-quiz/api/fake-questions.json";
import Stepper from "./stepper";
import { useEffect, useState } from "react";
import { QuestionDTO } from "@entities/question/model/question.model";
import MultipleChoice from "@entities/question/ui/multiple-choice/multiple-choice";
import Countdown from "./countdown";
import ShortText from "@entities/question/ui/short-text/short-text";
import LongText from "@entities/question/ui/long-text/long-text";

interface Props {
  onFinish: () => void;
}
export default function StepQuiz({ onFinish }: Props) {
  const [timeLimit] = useState(time);
  const [questionsData] = useState(questions as QuestionDTO[]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const savedIndex = sessionStorage.getItem("currentQuestionIndex");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });

  useEffect(() => {
    sessionStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );

    if (currentQuestionIndex >= questionsData.length) {
      onFinish();
    }

    return () => {
      sessionStorage.removeItem("currentQuestionIndex");
    };
  }, [currentQuestionIndex, questionsData.length, onFinish]);

  function toNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function renderQuestion(question: QuestionDTO) {
    switch (question.type) {
      case "single_choice":
        return (
          <SingleChoice question={question} toNextQuestion={toNextQuestion} />
        );
      case "multiple_choice":
        return (
          <MultipleChoice question={question} toNextQuestion={toNextQuestion} />
        );

      case "short_text":
        return (
          <ShortText question={question} toNextQuestion={toNextQuestion} />
        );

      case "long_text":
        return <LongText question={question} toNextQuestion={toNextQuestion} />;
      default:
        throw new Error("Unknown question type");
    }
  }

  return currentQuestionIndex >= questionsData.length ? null : (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <h1 className="font-bold text-xl h-fit">Тестирование</h1>
        <Countdown initialTime={timeLimit} onCountdownEnd={onFinish} />
      </div>
      <Stepper
        currentStep={currentQuestionIndex}
        totalSteps={questions.length}
      />
      {renderQuestion(questionsData[currentQuestionIndex])}
    </div>
  );
}
