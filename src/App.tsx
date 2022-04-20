import React from "react";
import { AppWrapper, Arena, team } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import TeamUnits from "./Components/TeamUnits/TeamUnits";
import TurnPointer from "./Components/TurnPointer/TurnPointer";
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
            <TeamUnits team={this.teamA} />
          </div>
          <div className={team}>
            <TeamUnits team={this.teamB} />
          </div>
        </div>
        <TurnPointer team={this.teamA} />
        <DynamicBackground />
      </div>
    );
  }
}

export default App;
