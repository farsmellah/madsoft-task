import { SingleChoiceAnswerDTO } from "@entities/question/model/question.model";

interface Props {
  answer: SingleChoiceAnswerDTO;
  onAnswerClick: (answer: string) => void;
  name: string;
  selectedAnswerID: string | null;
}

//TODO: text could not be
export default function SingleChoiceAnswer({
  answer,
  name,
  onAnswerClick,
  selectedAnswerID,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="appearance-none cursor-pointer hover:bg-red-200 checked:bg-red-700 checked:active:bg-red-700 checked:focus:bg-red-700 bg-rind focus:outline-none focus:ring-1 focus:ring-red-700"
        type="radio"
        value={answer.id}
        checked={selectedAnswerID === answer.id}
        name={name}
        id={answer.id}
        onChange={() => onAnswerClick(answer.id)}
      />
      <label htmlFor={answer.id} className="select-none">
        {answer.text}
      </label>
    </div>
  );
}
