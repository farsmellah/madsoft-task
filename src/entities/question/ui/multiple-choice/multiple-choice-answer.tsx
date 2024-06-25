import { MultipleChoiceAnswerDTO } from "@entities/question/model/question.model";

interface Props {
  answer: MultipleChoiceAnswerDTO;
  onAnswerClick: (answer: string) => void;
  name: string;
  isSelected: boolean;
}

export default function MultipleChoiceAnswer({
  answer,
  name,
  onAnswerClick,
  isSelected,
}: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="appearance-none cursor-pointer hover:bg-red-200 checked:bg-red-700 checked:active:bg-red-700 checked:focus:bg-red-700 bg-rind focus:outline-none focus:ring-1 focus:ring-red-700"
        type="checkbox"
        value={answer.id}
        checked={isSelected}
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
