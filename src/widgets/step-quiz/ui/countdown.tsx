import { useEffect, useState } from "react";

interface Props {
  initialTime: number;
  onCountdownEnd: () => void;
}
function Countdown({ initialTime, onCountdownEnd }: Props) {
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem("countdownTime");
    return savedTime ? parseInt(savedTime, 10) : initialTime;
  });

  useEffect(() => {
    if (time <= 0) {
      onCountdownEnd();
      localStorage.removeItem("countdownTime");
      return;
    }

    const countdown = setInterval(() => {
      setTime((prev) => {
        const newTime = prev - 1;
        localStorage.setItem("countdownTime", newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [time, onCountdownEnd]);

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
