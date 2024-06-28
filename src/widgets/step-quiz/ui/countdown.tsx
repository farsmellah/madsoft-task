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
      localStorage.removeItem("countdownTime");
      onCountdownEnd();
      return;
    }

    localStorage.setItem("countdownTime", time.toString());

    const countdown = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => {
      localStorage.removeItem("countdownTime");
      clearInterval(countdown);
    };
  }, [time, onCountdownEnd]);

  useEffect(() => {
    if (time <= 0) {
      localStorage.removeItem("countdownTime");
      onCountdownEnd();
    }
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
