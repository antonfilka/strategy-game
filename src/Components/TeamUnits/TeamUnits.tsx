import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import RowOfCells from "../RowOfCells/RowOfCells";
import { defendButton, teamUnits, teamWrapper } from "./TeamUnits.css";

interface ITeamUnits {
  team: Team;
}

export default class TeamUnits extends React.Component<ITeamUnits> {
  team;
  constructor(props: ITeamUnits) {
    super(props);
    this.team = props.team;
  }
  render() {
    const handleDefendButton = () => {
      if (this.team.getIsMyTurn()) {
        this.team.getIsDefending() ? alert("You are defending now") : null;
        this.team.setIsDefending(true);
        const units = this.team.getUnits();
        units.forEach((row) =>
          row.forEach((unit) => unit.setIsDefending(true))
        );
        this.setState({});
      } else {
        alert("Wait until your turn");
      }
    };
    return (
      <div className={teamWrapper}>
        <div className={teamUnits}>
          {this.team.getUnits().map((rowOfUnits, index) => {
            return <RowOfCells rowOfUnits={rowOfUnits} key={index} />;
          })}
        </div>
        <button className={defendButton} onClick={() => handleDefendButton()}>
          Defend
          <img
            src="https://cdn-icons-png.flaticon.com/512/595/595764.png"
            style={{ width: "20px", marginLeft: "5px" }}
          />
        </button>
      </div>
    );
  }
}
