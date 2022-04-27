import Team from "../Team";

export default class CleanUnitsFlags {
  public static cleanUnitsDefendingFlag = (team: Team): void => {
    team
      .getUnits()
      .forEach((unitRow) =>
        unitRow.forEach((unit) => unit.setIsDefending(false))
      );
  };

  public static cleanUnitsParalyzedFlag = (team: Team): void => {
    team
      .getUnits()
      .forEach((unitRow) =>
        unitRow.forEach((unit) => unit.setIsParalyzed(false))
      );
  };
}
