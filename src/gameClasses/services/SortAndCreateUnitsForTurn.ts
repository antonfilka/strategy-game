import Team from "../Team";

export default class SortAndCreateUnitsForTurn {
  public static sortAndCreateUnitsForTurn = (attackingTeam: Team): void => {
    //  clean possible existing units in array
    attackingTeam
      .getUnitsInTurn()
      .splice(0, attackingTeam.getUnitsInTurn().length);

    // unitsInTurn - those units of team that are not dead & not paralyzed
    attackingTeam.getUnits().forEach((row) =>
      row.forEach((unit) => {
        !unit.getIsDead() && !unit.getIsParalyzed()
          ? attackingTeam.setUnitsInTurn([
              ...attackingTeam.getUnitsInTurn(),
              unit,
            ])
          : null;
      })
    );

    // sort unitsInTurn by Initiative value
    attackingTeam.setUnitsInTurn(
      attackingTeam
        .getUnitsInTurn()
        .sort((a, b) => b.getInitiative() - a.getInitiative())
    );
  };
}
