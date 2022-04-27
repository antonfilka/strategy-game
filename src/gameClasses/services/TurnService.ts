import Team from "../Team";
import { units } from "./RandomUnitGenerator";

export default class TurnService {
  public static isTheEndOfTurn = (
    attackingTeam: Team,
    currentAttackingUnit: units
  ): boolean => {
    if (
      attackingTeam
        .getUnitsInTurn()
        .findIndex((unit) => unit === currentAttackingUnit) ===
      attackingTeam.getUnitsInTurn().length - 1
    ) {
      attackingTeam.setIsAttackTurnCompleted(true);
      attackingTeam.getUnits().forEach((untiRow) =>
        untiRow.forEach((unit) => {
          unit.setHasCompletedTheTurn(false);
        })
      );
      return true;
    }
    return false;
  };
}
