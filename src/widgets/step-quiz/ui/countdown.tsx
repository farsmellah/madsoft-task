import { useEffect, useState } from "react";
import { worker_script } from "../api/countdown-worker";
import { PAGE_TITLE } from "@shared/index";

interface Props {
  initialTime: number;
  onCountdownEnd: () => void;
}
const timerWorker = new Worker(worker_script);

function Countdown({ initialTime, onCountdownEnd }: Props) {
  const [timer, setTimer] = useState(() => {
    const savedTime = sessionStorage.getItem("countdownTime");
    return savedTime ? parseInt(savedTime, 10) : initialTime;
  });

  useEffect(() => {
    //initialize web worker interval
    timerWorker.postMessage({ turn: "on", initialTime: timer });

    //update state and storage on message
    timerWorker.onmessage = ({ data }) => {
      setTimer(data.time);
      sessionStorage.setItem("countdownTime", data.time.toString());
      document.title = formatTime(data.time) + " - " + PAGE_TITLE;
    };

    //stop web worker on unmount
    return () => {
      timerWorker.postMessage({ turn: "off" });
      sessionStorage.removeItem("countdownTime");
    };
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      sessionStorage.removeItem("countdownTime");
      onCountdownEnd();
    }
  }, [timer, onCountdownEnd]);

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="flex gap-2">
      <div className="border border-gray-600 px-4 py-[2px] rounded text-gray-600">
        {formatTime(timer)}
      </div>
    </div>
  );
}

export default Countdown;
