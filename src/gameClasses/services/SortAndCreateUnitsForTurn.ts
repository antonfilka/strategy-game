import Team from "../Team";
import { units } from "./RandomUnitGenerator";

export default class SortAndCreateUnitsForTurn {
  public static sortAndCreateUnitsForTurn = (
    attackingTeam: Team
  ): Array<units> => {
    // unitsInTurn - those units of team that are not dead & not paralyzed
    const unitsInTurn: Array<units> = [];

    attackingTeam.getUnits().forEach(row =>
      row.forEach(unit => {
        !unit.getIsDead() && !unit.getIsParalyzed()
          ? unitsInTurn.push(unit)
          : null;
      })
    );

    // sort unitsInTurn by Initiative value
    unitsInTurn.sort((a, b) => b.getInitiative() - a.getInitiative());

    return unitsInTurn;
  };
}
