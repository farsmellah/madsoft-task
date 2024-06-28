interface Props {
  onButtonClick: () => void;
}
export default function QuizResult({ onButtonClick }: Props) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="text-xl h-fit">Данные отправлены</h1>
      <button
        className="px-8 py-1 rounded bg-red-700 hover:bg-red-800 text-white"
        onClick={onButtonClick}
      >
        К результатам
      </button>
    </div>
  );
}
