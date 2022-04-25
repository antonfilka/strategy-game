import React, { useEffect, useState } from "react";
import { AppWrapper, Arena, team } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import RoundInfo from "./Components/RoundInfo/RoundInfo";
import TeamUnits from "./Components/TeamUnits/TeamUnits";
import TurnPointer from "./Components/TurnPointer/TurnPointer";
import AttackTurn from "./gameClasses/AttackTurn";
import { units } from "./gameClasses/services/RandomUnitGenerator";
import Team from "./gameClasses/Team";
import TurnSwitcher from "./gameClasses/TurnSwitcher";
import { teams } from "./gameClasses/Units/Unit";

const App: React.FC = () => {
  const [currentTurn, setCurrentTurn] = useState(teams.teamA);
  const [unitOnHover, setUnitOnHover] = useState<string>("");
  const [teamA, setTeamA] = useState(new Team({ team: teams.teamA }));
  const [teamB, setTeamB] = useState(new Team({ team: teams.teamB }));
  const [attackTurn, setAttackTurn] = useState(
    new AttackTurn({ teamA, teamB })
  );
  const [currentTurnActionNumber, setCurrentTurnActionNumber] = useState(1);
  const [currentTarget, setCurrentTarget] = useState<units>();

  const turnSwitcher = new TurnSwitcher({ teamA: teamA, teamB: teamB });

  const handleTurnChange = (team: string) => {
    turnSwitcher.Switch();
    if (team === teams.teamA) {
      setCurrentTurn(teams.teamB);
      teamB.cleanUnitsDefendingFlag();
    } else {
      setCurrentTurn(teams.teamA);
      teamA.cleanUnitsDefendingFlag();
    }
  };

  const handleNewTurnAction = (team: Team) => {
    if (team.getTeam() === currentTurn) {
      console.log("turn action triggered");
      attackTurn.AttackTurn(team);
      setCurrentTurnActionNumber((prev) => prev + 1);
    } else {
      alert("Wait until your turn");
    }
  };

  const handleSetCurrentTarget = (unit: units) => {
    setCurrentTarget(unit);
    setCurrentTurnActionNumber((prev) => prev + 1);

    attackTurn.setCurrentTarget(unit);
    attackTurn.AttackTurn(currentTurn === teams.teamA ? teamA : teamB);
  };

  if (attackTurn.getAttackTurnIsCompleted()) {
    handleTurnChange(currentTurn);
    setAttackTurn(new AttackTurn({ teamA, teamB }));
  }

  return (
    <div className={AppWrapper}>
      <RoundInfo
        teamA={teamA}
        teamB={teamB}
        currentTurn={currentTurn}
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

export default App;
