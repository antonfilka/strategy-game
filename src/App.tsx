import React from "react";
import { AppWrapper, Arena, team } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import RowOfCells from "./Components/RowOfCells/RowOfCells";
import TeamUnits from "./Components/TeamUnits/TeamUnits";
import RandomUnitGenerator from "./gameClasses/services/RandomUnitGenerator";
import Team from "./gameClasses/Team";
import { teams } from "./gameClasses/Units/Unit";

class App extends React.Component {
  teamA = new Team(teams.teamA);
  teamB = new Team(teams.teamB);

  render() {
    return (
      <div className={AppWrapper}>
        <div className={Arena}>
          <div className={team}>
            <TeamUnits units={this.teamA.getUnits()} />
          </div>
          <div className={team}>
            <TeamUnits units={this.teamB.getUnits()} />
          </div>
        </div>
        <DynamicBackground />
      </div>
    );
  }
}

export default App;
