import Team from "../Team";

interface ITurnSwitcher {
  teamA: Team;
  teamB: Team;
}

export default class TurnSwitcher {
  private teamA: Team;
  private teamB: Team;

  constructor(props: ITurnSwitcher) {
    this.teamA = props.teamA;
    this.teamB = props.teamB;
  }

  public Switch = (): void => {
    if (this.teamA.getIsMyTurn()) {
      this.teamA.setIsMyTurn(false);
      this.teamB.setIsMyTurn(true);
    } else {
      this.teamA.setIsMyTurn(true);
      this.teamB.setIsMyTurn(false);
    }
  };

  public getTeamA = (): Team => {
    return this.teamA;
  };
  public getTeamB = (): Team => {
    return this.teamB;
  };
}
