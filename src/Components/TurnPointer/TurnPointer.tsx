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
  currentTurn: string;
}

const TurnPointer: React.FC<ITurnPointer> = ({ currentTurn }) => {
  const isTurnOfTeamA = currentTurn === teams.teamA ? true : false;

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
          src="https://4.downloader.disk.yandex.by/preview/d0574ca916ad8e9832bd18da04d34f64c1cc3ae53a14ce530681aca10f915621/inf/kmHU6bgQG3fLnt3t-ZfAOuPYCJerrSP2D64qSzsboVrD-_AqSFMudn-9czeT6lVBHxwV2B7hhN2hGQQRs1Wc5w%3D%3D?uid=1130000014892791&filename=Pointer.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642"
        />
      </div>

      <div className={slider}></div>
    </div>
  );
};

export default TurnPointer;
