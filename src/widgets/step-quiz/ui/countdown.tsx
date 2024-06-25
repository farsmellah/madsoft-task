import { useEffect, useState } from "react";

interface Props {
  initialTime: number;
  onCountdownEnd: () => void;
}
function Countdown({ initialTime, onCountdownEnd }: Props) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  useEffect(() => {
    if (time === 0) {
      onCountdownEnd();
    }
  }, [time]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="border border-gray-600 px-4 py-[2px] rounded text-gray-600">
      {formatTime(time)}
    </div>
  );
}

export default Countdown;
