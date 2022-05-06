import { assignInlineVars } from "@vanilla-extract/dynamic";
import React from "react";
import { teams } from "../../gameClasses/Units/Unit";
import {
  pointer,
  pointerImage,
  pointerText,
  pointerWrapper,
  slider,
} from "./TurnPointer.css";

interface ITurnPointer {
  currentTeamTurn: string;
}

const TurnPointer: React.FC<ITurnPointer> = ({ currentTeamTurn }) => {
  const isTurnOfTeamA = currentTeamTurn === teams.teamA ? true : false;

  return (
    <div className={pointerWrapper}>
      <div
        className={pointer}
        style={assignInlineVars({
          top: isTurnOfTeamA ? "22%" : "70%",
          filter: isTurnOfTeamA
            ? "hue-rotate(0deg)"
            : "hue-rotate(180deg) saturate(30%)",
        })}
      >
        <div className={pointerText}>Your turn</div>
        <img
          className={pointerImage}
          src="https://i.ibb.co/fYLXzJ4/Pointer.png"
        />
      </div>
      <div className={slider}></div>
    </div>
  );
};

export default TurnPointer;
