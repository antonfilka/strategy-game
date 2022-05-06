import Team from "../Team";

export default class IsGameOver {
  public static IsGameOver = (team: Team): boolean => {
    let isGameOver = true;

    team
      .getUnits()
      .forEach(rowOfUnits =>
        rowOfUnits.forEach(unit =>
          unit.getIsDead()
            ? (isGameOver = isGameOver && true)
            : (isGameOver = false)
        )
      );

    return isGameOver;
  };
}
