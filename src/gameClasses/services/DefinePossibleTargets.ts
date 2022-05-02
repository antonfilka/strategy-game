import Team from "../Team";
import { teams, unitsTypes } from "../Units/Unit";
import AttackTurnService from "./AttackTurnService";
import { units } from "./RandomUnitGenerator";
import SortAndCreateUnitsForTurn from "./SortAndCreateUnitsForTurn";

export default class DefinePossibleTargets {
  public static definePossibleMeleeTargets = (
    unit: units,
    enemyTeam: Team
  ): Array<units> => {
    const possibleTargets: Array<units> = [];

    enemyTeam.getUnits().forEach(rowOfEnemyUnits =>
      rowOfEnemyUnits.forEach(enemyUnit => {
        let rowDiff = Math.abs(
          enemyUnit.getPosition()[0] - unit.getPosition()[0]
        );
        if (rowDiff === 1) {
          let columnDiff = Math.abs(
            enemyUnit.getPosition()[1] - unit.getPosition()[1]
          );
          if (columnDiff <= 1) {
            if (!enemyUnit.getIsDead()) {
              possibleTargets.push(enemyUnit);
            }
          } else if (columnDiff === 2) {
            if (enemyUnit.getPosition()[1] === 3) {
              let unitIsReachable = false;
              if (enemyUnit.getTeam() === teams.teamB) {
                enemyTeam.getUnits()[0][0].getIsDead() &&
                enemyTeam.getUnits()[0][1].getIsDead()
                  ? (unitIsReachable = true)
                  : (unitIsReachable = false);
              } else {
                enemyTeam.getUnits()[1][0].getIsDead() &&
                enemyTeam.getUnits()[1][1].getIsDead()
                  ? (unitIsReachable = true)
                  : (unitIsReachable = false);
              }
              if (unitIsReachable) {
                if (!enemyUnit.getIsDead()) {
                  possibleTargets.push(enemyUnit);
                }
              }
            } else if (enemyUnit.getPosition()[1] === 1) {
              let unitIsReachable = false;
              if (enemyUnit.getTeam() === teams.teamB) {
                enemyTeam.getUnits()[0][1].getIsDead() &&
                enemyTeam.getUnits()[0][2].getIsDead()
                  ? (unitIsReachable = true)
                  : (unitIsReachable = false);
              } else {
                enemyTeam.getUnits()[1][1].getIsDead() &&
                enemyTeam.getUnits()[1][2].getIsDead()
                  ? (unitIsReachable = true)
                  : (unitIsReachable = false);
              }
              if (unitIsReachable) {
                if (!enemyUnit.getIsDead()) {
                  possibleTargets.push(enemyUnit);
                }
              }
            }
          }
          // if distance to target is greater than 1 row, check if the unit reachable because of any dead units
        } else if (rowDiff === 2) {
          let secondRowIsReachable = true;
          enemyUnit.getTeam() === teams.teamB
            ? enemyTeam
                .getUnits()[0]
                .forEach(enemyUnit =>
                  enemyUnit.getIsDead()
                    ? (secondRowIsReachable = secondRowIsReachable && true)
                    : (secondRowIsReachable = secondRowIsReachable && false)
                )
            : enemyTeam
                .getUnits()[1]
                .forEach(enemyUnit =>
                  enemyUnit.getIsDead()
                    ? (secondRowIsReachable = secondRowIsReachable && true)
                    : (secondRowIsReachable = secondRowIsReachable && false)
                );

          if (secondRowIsReachable) {
            if (!enemyUnit.getIsDead()) {
              possibleTargets.push(enemyUnit);
            }
          }
        }
      })
    );
    return possibleTargets;
  };

  public static definePossibleRangeTargets = (
    unit: units,
    enemyTeam: Team
  ): Array<units> => {
    const possibleTargets: Array<units> = [];

    // setting all enemy units as possible targets
    enemyTeam.getUnits().forEach(unitRow =>
      unitRow.forEach(enemyUnit => {
        if (!enemyUnit.getIsDead()) {
          possibleTargets.push(enemyUnit);
        }
      })
    );

    return possibleTargets;
  };

  public static definePossibleHealTargets = (
    unit: units,
    myTeam: Team
  ): Array<units> => {
    const possibleTargets: Array<units> = [];

    // setting all friendly units as possible target
    myTeam.getUnits().forEach(unitRow =>
      unitRow.forEach(myUnit => {
        if (!myUnit.getIsDead() && myUnit !== unit) {
          possibleTargets.push(myUnit);
        }
      })
    );

    return possibleTargets;
  };

  public static noTargetsAction = (unit: units, attackingTeam: Team): void => {
    unit.setHasCompletedTheTurn(true);
    unit.setIsCurrentUnit(false);
    alert("This unit stands too far to attack anybody");
    attackingTeam.setIsAttacking(false);
    AttackTurnService.getNextAttackingUnit(
      SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(attackingTeam)
    )?.setIsCurrentUnit(true);
    AttackTurnService.isTheEndOfTurn(attackingTeam, unit);
  };
}
