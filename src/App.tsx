import React from "react";
import { AppWrapper, Arena, team } from "./App.css";
import DynamicBackground from "./Components/DynamicBackground/DynamicBackground";
import TeamUnits from "./Components/TeamUnits/TeamUnits";
import TurnPointer from "./Components/TurnPointer/TurnPointer";
import Team from "./gameClasses/Team";
import TurnSwitcher from "./gameClasses/TurnSwitcher";
import { teams } from "./gameClasses/Units/Unit";

interface IState {
  currentTurn: string;
}

class App extends React.Component<IState> {
  state = { currentTurn: "A" };

  teamA = new Team({ team: teams.teamA });
  teamB = new Team({ team: teams.teamB });
  turnSwitcher = new TurnSwitcher({ teamA: this.teamA, teamB: this.teamB });

  render() {
    const handleTurnChange = (team: string) => {
      this.turnSwitcher.Switch();
      team === teams.teamA
        ? this.setState({ currentTurn: teams.teamB })
        : this.setState({ currentTurn: teams.teamA });
    };

    const getCurrentTurn = (): string => {
      return this.state.currentTurn;
    };

    return (
      <div className={AppWrapper}>
        <div className={Arena}>
          <div className={team}>
            <TeamUnits team={this.teamA} handleTurnChange={handleTurnChange} />
          </div>
          <div className={team}>
            <TeamUnits team={this.teamB} handleTurnChange={handleTurnChange} />
          </div>
        </div>
        <TurnPointer getCurrentTurn={getCurrentTurn} />
        <DynamicBackground />
      </div>
    );
  }
}

export default App;
