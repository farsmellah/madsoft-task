import { SingleChoice } from "@entities/question/index";
import { questions } from "@widgets/step-quiz/api/fake-questions.json";
import Stepper from "./stepper";
import { useState } from "react";
import { QuestionDTO } from "@entities/question/model/question.model";
import MultipleChoice from "@entities/question/ui/multiple-choice/multiple-choice";

export default function StepQuiz() {
  const [questionsData, _] = useState(questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  function toNextQuestion() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function renderQuestion(question: QuestionDTO) {
    switch (question.type) {
      case "single_choice":
        return (
          <SingleChoice
            question={questionsData[currentQuestionIndex]}
            toNextQuestion={toNextQuestion}
          />
        );
      case "multiple_choice":
        return (
          <MultipleChoice question={question} toNextQuestion={toNextQuestion} />
        );
      default:
        throw new Error("Unknown question type");
    }
  }
  function renderWidget() {
    if (currentQuestionIndex === questionsData.length) {
      return (
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-xl h-fit">Данные отправлены</h1>
          <button className="px-8 py-1 rounded bg-red-700 hover:bg-red-800 text-white">
            К результатам
          </button>
        </div>
      );
    } else
      return (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <h1 className="font-bold text-xl h-fit">Тестирование</h1>
            <div className="border border-gray-600 px-4 py-[2px] rounded text-gray-600">
              16:56
            </div>
          </div>
          <Stepper
            currentStep={currentQuestionIndex}
            totalSteps={questions.length}
          />
          {renderQuestion(questionsData[currentQuestionIndex])}
        </div>
      );
  }

  return renderWidget();
}
