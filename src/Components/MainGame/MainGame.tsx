import React, { useState } from "react";
import { AppWrapper, Arena, team } from "./MainGame.css";
import DynamicBackground from "../DynamicBackground/DynamicBackground";
import RoundInfo from "../RoundInfo/RoundInfo";
import TeamUnits from "../TeamUnits/TeamUnits";
import TurnPointer from "../TurnPointer/TurnPointer";
import AttackTurnService from "../../gameClasses/services/AttackTurnService";
import { units } from "../../gameClasses/services/RandomUnitGenerator";
import Team from "../../gameClasses/Team";
import TurnSwitcher from "../../gameClasses/services/TurnSwitcher";
import { teams } from "../../gameClasses/Units/Unit";
import CleanUnitsFlags from "../../gameClasses/services/CleanUnitsFlags";

const MainGame: React.FC = () => {
  const [currentTurn, setCurrentTurn] = useState(teams.teamA);
  const [unitOnHover, setUnitOnHover] = useState<string>("");
  const [teamA, setTeamA] = useState(new Team({ team: teams.teamA }));
  const [teamB, setTeamB] = useState(new Team({ team: teams.teamB }));
  const [currentTurnActionNumber, setCurrentTurnActionNumber] = useState(1);

  const turnSwitcher = new TurnSwitcher({ teamA: teamA, teamB: teamB });
  const currentTeam = currentTurn === teams.teamA ? teamA : teamB;
  const waitingTeam = currentTurn === teams.teamA ? teamB : teamA;

  const handleTurnChange = (team: string) => {
    turnSwitcher.Switch();
    if (team === teams.teamA) {
      setCurrentTurn(teams.teamB);
      CleanUnitsFlags.cleanUnitsDefendingFlag(teamB);
      CleanUnitsFlags.cleanUnitsParalyzedFlag(teamA);
    } else {
      setCurrentTurn(teams.teamA);
      CleanUnitsFlags.cleanUnitsDefendingFlag(teamA);
      CleanUnitsFlags.cleanUnitsParalyzedFlag(teamB);
    }
  };

  const handleNewTurnAction = (team: Team) => {
    if (team.getTeam() === currentTurn) {
      // passing null because there's no target selected
      AttackTurnService.AttackTurnService(currentTeam, waitingTeam, null);
      setCurrentTurnActionNumber(currentTurnActionNumber + 1);
      return;
    }
    alert("Wait until your turn");
  };

  const handleSetCurrentTarget = (unit: units) => {
    AttackTurnService.AttackTurnService(currentTeam, waitingTeam, unit);
    setCurrentTurnActionNumber(currentTurnActionNumber + 1);
  };

  if (currentTeam.getIsAttackTurnCompleted()) {
    currentTeam.setIsAttackTurnCompleted(true);
    waitingTeam.setIsAttackTurnCompleted(false);
    handleTurnChange(currentTurn);
  }

  return (
    <div className={AppWrapper}>
      <RoundInfo
        currentTeam={currentTeam}
        unitOnHover={unitOnHover}
        setUnitOnHover={setUnitOnHover}
      />
      <div className={Arena}>
        <div className={team}>
          <TeamUnits
            team={teamA}
            handleTurnChange={handleTurnChange}
            unitOnHover={unitOnHover}
            handleNewTurnAction={handleNewTurnAction}
            handleSetCurrentTarget={handleSetCurrentTarget}
          />
        </div>
        <div className={team}>
          <TeamUnits
            team={teamB}
            handleTurnChange={handleTurnChange}
            unitOnHover={unitOnHover}
            handleNewTurnAction={handleNewTurnAction}
            handleSetCurrentTarget={handleSetCurrentTarget}
          />
        </div>
      </div>
      <TurnPointer currentTurn={currentTurn} />
      <DynamicBackground />
    </div>
  );
};

export default MainGame;
