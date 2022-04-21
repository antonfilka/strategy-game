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
  const [unitsOnHover, setUnitsOnHover] = useState<Array<string>>([]);
  const [teamA, setTeamA] = useState(new Team({ team: teams.teamA }));
  const [teamB, setTeamB] = useState(new Team({ team: teams.teamB }));

  //console.log(unitsOnHover);

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
        unitsOnHover={unitsOnHover}
        setUnitsOnHover={setUnitsOnHover}
      />
      <div className={Arena}>
        <div className={team}>
          <TeamUnits
            team={teamA}
            handleTurnChange={handleTurnChange}
            unitsOnHover={unitsOnHover}
            setUnitsOnHover={setUnitsOnHover}
          />
        </div>
        <div className={team}>
          <TeamUnits
            team={teamB}
            handleTurnChange={handleTurnChange}
            unitsOnHover={unitsOnHover}
            setUnitsOnHover={setUnitsOnHover}
          />
        </div>
      </div>
      <TurnPointer currentTurn={currentTurn} />
      <DynamicBackground />
    </div>
  );
};

export default App;
