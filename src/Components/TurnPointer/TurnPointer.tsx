import { keyframes } from "@vanilla-extract/css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { Component } from "react";
import Team from "../../gameClasses/Team";
import {
  moveToA,
  moveToB,
  pointer,
  pointerWrapper,
  slider,
} from "./TurnPointer.css";

interface ITurnPointer {
  team: Team;
}

export default class TurnPointer extends Component<ITurnPointer> {
  team;
  constructor(props: ITurnPointer) {
    super(props);
    this.team = props.team;
  }
  render() {
    const currentTeamIsA = this.team.getIsMyTurn();

    return (
      <div className={pointerWrapper}>
        <div
          className={pointer}
          style={assignInlineVars({
            top: currentTeamIsA ? "24%" : "76%",
          })}
        >
          Your turn
        </div>
        <div className={slider}></div>
      </div>
    );
  }
}
