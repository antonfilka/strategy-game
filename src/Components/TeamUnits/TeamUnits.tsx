import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import RowOfCells from "../RowOfCells/RowOfCells";
import { defendButton, teamUnits, teamWrapper } from "./TeamUnits.css";

interface ITeamUnits {
  handleTurnChange: (team: string) => void;
  team: Team;
}

export default class TeamUnits extends React.Component<ITeamUnits> {
  private team: Team;
  private handleTurnChange;
  constructor(props: ITeamUnits) {
    super(props);
    this.team = props.team;
    this.handleTurnChange = props.handleTurnChange;
  }
  render() {
    const handleDefendButton = () => {
      this.team.defend();
      if (this.team.getIsMyTurn()) {
        this.handleTurnChange(this.team.getTeam());
      }

      this.setState({ a: "" });
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
