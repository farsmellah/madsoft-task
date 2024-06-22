interface Props {
  currentStep: number;
  totalSteps: number;
}
export default function Stepper({ currentStep, totalSteps }: Props) {
  function getClassName(currentStep: number, index: number) {
    if (currentStep === index) {
      return "bg-red-700";
    } else if (currentStep > index) {
      return "bg-black";
    } else {
      return "bg-gray-300";
    }
  }

  return (
    <div className="w-full flex justify-stretch gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-full h-2 ${getClassName(currentStep, index)}`}
        />
      ))}
    </div>
  );
}
