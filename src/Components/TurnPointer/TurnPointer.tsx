import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { Component } from "react";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import { pointer, pointerWrapper, slider } from "./TurnPointer.css";

interface ITurnPointer {
  getCurrentTurn: () => string;
}

export default class TurnPointer extends Component<ITurnPointer> {
  private getCurrentTurn;

  constructor(props: ITurnPointer) {
    super(props);
    this.getCurrentTurn = props.getCurrentTurn;
  }

  render() {
    let isTurnOfTeamA;
    this.getCurrentTurn() === teams.teamA
      ? (isTurnOfTeamA = true)
      : (isTurnOfTeamA = false);

    return (
      <div className={pointerWrapper}>
        <div
          className={pointer}
          style={assignInlineVars({
            top: isTurnOfTeamA ? "24%" : "76%",
          })}
        >
          Your turn
        </div>
        <div className={slider}></div>
      </div>
    );
  }
}
