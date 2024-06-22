interface Props {
  text: string;
  name: string;
}

//TODO: text could not be
export default function SingleChoiceAnswer({ text, name }: Props) {
  return (
    <div className="flex items-center gap-2">
      <input
        className="appearance-none cursor-pointer hover:bg-red-200 checked:bg-red-700 checked:active:bg-red-700 checked:focus:bg-red-700 bg-rind focus:outline-none focus:ring-1 focus:ring-red-700"
        type="radio"
        value={text}
        name={name}
      />
      <label className="select-none">{text}</label>
    </div>
  );
}
