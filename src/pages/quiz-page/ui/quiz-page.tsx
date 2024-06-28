import { QuizResult } from "@widgets/quiz-result";
import { StepQuiz } from "@widgets/step-quiz";
import { useState } from "react";

export default function QuizPage() {
  const [quizFinished, setQuizFinished] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center">
      {quizFinished ? (
        <QuizResult onButtonClick={() => setQuizFinished(false)} />
      ) : (
        <StepQuiz onFinish={() => setQuizFinished(true)} />
      )}
    </div>
  );
}
