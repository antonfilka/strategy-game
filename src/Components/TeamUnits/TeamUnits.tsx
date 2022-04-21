import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import RowOfCells from "../RowOfCells/RowOfCells";
import {
  attackButton,
  buttons,
  defendButton,
  teamUnits,
  teamWrapper,
} from "./TeamUnits.css";

interface ITeamUnits {
  setUnitsOnHover: (arr: Array<string>) => void;
  unitsOnHover: string[];
  handleTurnChange: (team: string) => void;
  team: Team;
}

export default class TeamUnits extends React.Component<ITeamUnits> {
  private team: Team;
  private handleTurnChange;
  private unitsOnHover;
  private setUnitsOnHover;

  constructor(props: ITeamUnits) {
    super(props);
    this.team = props.team;
    this.handleTurnChange = props.handleTurnChange;
    this.unitsOnHover = props.unitsOnHover;
    this.setUnitsOnHover = props.setUnitsOnHover;
  }
  render() {
    const handleDefendButton = () => {
      this.team.defend();
      if (this.team.getIsMyTurn()) {
        this.handleTurnChange(this.team.getTeam());
      }
    };

    const handleAttackButton = () => {};

    return (
      <div className={teamWrapper}>
        <div className={teamUnits}>
          {this.team.getUnits().map((rowOfUnits, index) => {
            return (
              <RowOfCells
                rowOfUnits={rowOfUnits}
                key={index}
                unitsOnHover={this.unitsOnHover}
                setUnitsOnHover={this.setUnitsOnHover}
              />
            );
          })}
        </div>
        <div className={buttons}>
          <button className={defendButton} onClick={() => handleDefendButton()}>
            Defend
            <img
              src="https://cdn-icons-png.flaticon.com/512/595/595764.png"
              style={{ width: "20px", marginLeft: "15px" }}
            />
          </button>

          <button className={attackButton} onClick={() => handleAttackButton()}>
            Attack
            <img
              src="https://cdn-icons-png.flaticon.com/512/2457/2457005.png"
              style={{
                width: "20px",
                marginLeft: "15px",
              }}
            />
          </button>
        </div>
      </div>
    );
  }
}
