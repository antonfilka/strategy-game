import React from "react";
import AttackTurn from "../../gameClasses/AttackTurn";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import RowOfCells from "../RowOfCells/RowOfCells";
import {
  attackButton,
  buttons,
  defendButton,
  teamUnits,
  teamWrapper,
} from "./TeamUnits.css";

interface ITeamUnits {
  unitOnHover: string;
  handleTurnChange: (team: string) => void;
  team: Team;
  handleNewTurnAction: (team: Team) => void;
  handleSetCurrentTarget: (unit: units) => void;
}

const TeamUnits: React.FC<ITeamUnits> = ({
  team,
  unitOnHover,
  handleNewTurnAction,
  handleSetCurrentTarget,
}) => {
  const handleDefendButton = () => {
    team.setIsDefending(true);
    handleNewTurnAction(team);
  };

  const handleAttackButton = () => {
    handleNewTurnAction(team);
  };

  return (
    <div className={teamWrapper}>
      <div className={teamUnits}>
        {team.getUnits().map((rowOfUnits, index) => {
          return (
            <RowOfCells
              rowOfUnits={rowOfUnits}
              key={index}
              unitOnHover={unitOnHover}
              handleSetCurrentTarget={handleSetCurrentTarget}
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
};

export default TeamUnits;
