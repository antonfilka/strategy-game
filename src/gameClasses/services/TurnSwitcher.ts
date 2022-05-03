import Team from "../Team";

export default class TurnSwitcher {
  public static Switch = (teamA: Team, teamB: Team) => {
    if (teamA.getIsMyTurn()) {
      teamA.setIsMyTurn(false);
      teamB.setIsMyTurn(true);
    } else {
      teamA.setIsMyTurn(true);
      teamB.setIsMyTurn(false);
    }
  };
}
