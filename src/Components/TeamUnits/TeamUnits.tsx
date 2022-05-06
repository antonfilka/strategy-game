import clsx from "clsx";
import React from "react";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import RowOfCells from "../RowOfCells/RowOfCells";
import {
  attackButton,
  buttons,
  cancelButton,
  defendButton,
  hidden,
  teamUnits,
  teamWrapper,
} from "./TeamUnits.css";

interface ITeamUnits {
  currentTeamTurn: string;
  attackingUnit: units | null;
  attackingTeam: Team;
  enemyTeam: Team;
  unitOnHover: string;
  handleTurnChange: (team: string) => void;
  team: Team;
  handleNewTurnAction: (team: Team) => void;
  handleSetCurrentTarget: (unit: units) => void;
  handleCancelButton: () => void;
  unitsAvailable: boolean;
}

const TeamUnits: React.FC<ITeamUnits> = ({
  currentTeamTurn,
  attackingUnit,
  attackingTeam,
  enemyTeam,
  unitOnHover,
  team,
  handleNewTurnAction,
  handleCancelButton,
  handleSetCurrentTarget,
  unitsAvailable,
}) => {
  const handleDefendButton = () => {
    if (!team.getIsAttacking()) {
      team.setIsDefending(true);
      handleNewTurnAction(team);
      return;
    }
    alert("You can't defend and attack at the same time");
  };

  const handleAttackButton = () => {
    if (!team.getIsDefending()) {
      team.setIsAttacking(true);
      handleNewTurnAction(team);
      return;
    }
    alert("You can't defend and attack at the same time");
  };

  const handleCancel = () => {
    if (team.getIsAttacking()) {
      handleCancelButton();
    }
  };

  return (
    <div className={teamWrapper}>
      <div className={teamUnits}>
        {team.getUnits().map((rowOfUnits, index) => {
          return (
            <RowOfCells
              key={index}
              currentTeamTurn={currentTeamTurn}
              attackingUnit={attackingUnit}
              attackingTeam={attackingTeam}
              enemyTeam={enemyTeam}
              rowOfUnits={rowOfUnits}
              unitOnHover={unitOnHover}
              handleSetCurrentTarget={handleSetCurrentTarget}
              unitsAvailable={unitsAvailable}
            />
          );
        })}
      </div>
      <div
        className={clsx(buttons, {
          [hidden]: currentTeamTurn !== team.getTeam(),
        })}
      >
        <button className={defendButton} onClick={() => handleDefendButton()}>
          Defend
          <img
            src="https://i.ibb.co/kDTn0CX/shield.png"
            style={{ width: "20px", marginLeft: "15px" }}
          />
        </button>
        {attackingUnit?.getType() === "healerMass" ||
        attackingUnit?.getType() === "healerSingle" ? (
          <button className={attackButton} onClick={() => handleAttackButton()}>
            Heal
            <img
              src="https://i.ibb.co/R9nFvHL/Medicine.png"
              style={{
                width: "20px",
                marginLeft: "15px",
              }}
            />
          </button>
        ) : (
          <button className={attackButton} onClick={() => handleAttackButton()}>
            Attack
            <img
              src="https://i.ibb.co/GVdshzC/sword.png"
              style={{
                width: "20px",
                marginLeft: "15px",
              }}
            />
          </button>
        )}

        <button className={cancelButton} onClick={() => handleCancel()}>
          Cancel
          <img
            src="https://i.ibb.co/2yK6Ygs/cancel.png"
            style={{ width: "14px", marginLeft: "15px" }}
          />
        </button>
      </div>
    </div>
  );
};

export default TeamUnits;
