import SingleChoice from "@entities/questions/single-choice/ui/single-choice";
import { questions } from "@widgets/step-quiz/api/fake-questions.json";
import Stepper from "./stepper";

export default function StepQuiz() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <h1 className="font-bold text-xl h-fit">Тестирование</h1>
        <div className="border border-gray-600 px-4 py-[2px] rounded text-gray-600">
          16:56
        </div>
      </div>
      <Stepper currentStep={0} totalSteps={questions.length} />
      <SingleChoice question={questions[0]} />
    </div>
  );
}
