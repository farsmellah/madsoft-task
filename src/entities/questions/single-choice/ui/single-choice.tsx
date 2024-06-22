import { SingleChoiceQuestionDTO } from "../model/single-choince.model";
import SingleChoiceAnswer from "./single-choice-answer";

interface Props {
  question: SingleChoiceQuestionDTO;
}
export default function SingleChoice({ question }: Props) {
  const answers = question.answers;
  return (
    <>
      <fieldset className="flex flex-col items-start gap-4">
        <p className="font-bold select-none">{question.text}</p>
        <div className="flex flex-col gap-2">
          {answers.map((answer, index) => (
            <SingleChoiceAnswer
              key={index}
              text={answer.text}
              name={"singleChoice"}
            />
          ))}
        </div>
        <button
          className="px-8 py-1 rounded bg-red-700 hover:bg-red-800 text-white"
          type="submit"
        >
          Ответить
        </button>
      </fieldset>
    </>
  );
}
