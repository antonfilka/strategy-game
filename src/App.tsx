import React, { useState } from "react";
import { AppWrapper, Arena, team } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import RoundInfo from "./Components/RoundInfo/RoundInfo";
import TeamUnits from "./Components/TeamUnits/TeamUnits";
import TurnPointer from "./Components/TurnPointer/TurnPointer";
import Team from "./gameClasses/Team";
import TurnSwitcher from "./gameClasses/TurnSwitcher";
import { teams } from "./gameClasses/Units/Unit";

const App: React.FC = () => {
  const [currentTurn, setCurrentTurn] = useState(teams.teamA);
  const [unitOnHover, setUnitOnHover] = useState<string>("");
  const [teamA, setTeamA] = useState(new Team({ team: teams.teamA }));
  const [teamB, setTeamB] = useState(new Team({ team: teams.teamB }));

  const turnSwitcher = new TurnSwitcher({ teamA: teamA, teamB: teamB });

  const handleTurnChange = (team: string) => {
    turnSwitcher.Switch();
    team === teams.teamA
      ? setCurrentTurn(teams.teamB)
      : setCurrentTurn(teams.teamA);
  };

  return (
    <div className={AppWrapper}>
      <RoundInfo
        turnSwitcher={turnSwitcher}
        unitOnHover={unitOnHover}
        setUnitOnHover={setUnitOnHover}
      />
      <div className={Arena}>
        <div className={team}>
          <TeamUnits
            team={teamA}
            handleTurnChange={handleTurnChange}
            unitOnHover={unitOnHover}
          />
        </div>
        <div className={team}>
          <TeamUnits
            team={teamB}
            handleTurnChange={handleTurnChange}
            unitOnHover={unitOnHover}
          />
        </div>
      </div>
      <TurnPointer currentTurn={currentTurn} />
      <DynamicBackground />
    </div>
  );
};

export default App;
