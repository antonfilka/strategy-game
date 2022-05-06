import clsx from "clsx";
import React from "react";
import { clockExpire, clockNormal, countDownWrapper } from "./CountDown.css";

interface ICountDown {
  seconds: number;
}

export const CountDown: React.FC<ICountDown> = ({ seconds }) => {
  return (
    <div className={countDownWrapper}>
      <p>Time left : &nbsp;</p>
      <div
        className={clsx({
          [clockNormal]: seconds > 3,
          [clockExpire]: seconds <= 3,
        })}
      >
        <p>{seconds >= 0 ? seconds : ""}</p>
      </div>
    </div>
  );
};
