interface Props {
  onClick: () => void;
  isDisabled: boolean;
}
function Button({ onClick, isDisabled }: Props) {
  function renderButton() {
    const baseClass =
      "px-8 py-1 rounded bg-red-700 hover:bg-red-800 text-white ";
    if (isDisabled) {
      return (
        <button
          disabled
          className={
            baseClass + "opacity-50 cursor-not-allowed hover:bg-red-700"
          }
          type="submit"
          onClick={onClick}
        >
          Ответить
        </button>
      );
    }
    return (
      <button className={baseClass} type="submit" onClick={onClick}>
        Ответить
      </button>
    );
  }

  return renderButton();
}

export default Button;
