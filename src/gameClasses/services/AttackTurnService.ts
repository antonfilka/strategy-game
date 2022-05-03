import DefinePossibleTargets from "./DefinePossibleTargets";
import { units } from "./RandomUnitGenerator";
import SortAndCreateUnitsForTurn from "./SortAndCreateUnitsForTurn";
import UnitActions from "./UnitActions";
import Team from "../Team";

export default class AttackTurnService {
  public static AttackTurnService = (
    attackingTeam: Team,
    enemyTeam: Team,
    currentTarget: units | null
  ) => {
    // units of attacking team that are not dead & not paralyzed
    const unitsInTurn =
      SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(attackingTeam);

    let currentAttackingUnit = AttackTurnService.AttackTurnPrepare(
      attackingTeam,
      enemyTeam,
      unitsInTurn
    );

    // if there are no attacking units in attacking team --> finish the turn for this team
    if (!currentAttackingUnit) {
      attackingTeam.setIsAttackTurnCompleted(true);

      attackingTeam.getUnits().forEach(untiRow =>
        untiRow.forEach(unit => {
          unit.setHasCompletedTheTurn(false);
        })
      );
      return;
    }

    if (currentAttackingUnit.getIsDefending()) {
      currentAttackingUnit.setHasCompletedTheTurn(true);

      // set next attacking unit of team as current unit
      AttackTurnService.getNextAttackingUnit(unitsInTurn)?.setIsCurrentUnit(
        true
      );
      AttackTurnService.isTheEndOfTurn(attackingTeam, currentAttackingUnit);

      return;
    }

    if (!currentTarget) {
      return;
    }

    let attackResult = UnitActions.attack(
      currentAttackingUnit,
      attackingTeam,
      enemyTeam,
      currentTarget
    );

    if (attackResult) {
      attackingTeam.setIsAttacking(false);

      currentAttackingUnit.setHasCompletedTheTurn(true);

      currentAttackingUnit.setIsCurrentUnit(false);

      // set next attacking unit of team as current unit
      AttackTurnService.getNextAttackingUnit(unitsInTurn)?.setIsCurrentUnit(
        true
      );

      AttackTurnService.isTheEndOfTurn(attackingTeam, currentAttackingUnit);
    }
  };

  public static AttackTurnPrepare = (
    attackingTeam: Team,
    enemyTeam: Team,
    unitsInTurn: Array<units>
  ): units | void => {
    // getting current attacking unit
    const currentAttackingUnit =
      AttackTurnService.getCurrentAttackingUnit(unitsInTurn);

    if (!currentAttackingUnit) {
      return;
    }

    if (attackingTeam.getIsDefending()) {
      UnitActions.defend(currentAttackingUnit);
      attackingTeam.setIsDefending(false);
      return currentAttackingUnit;
    }

    return currentAttackingUnit;
  };

  public static skipTurn = (
    currentUnit: units | null,
    attackingTeam: Team
  ): void => {
    if (!currentUnit) return;

    attackingTeam.setIsAttacking(false);

    currentUnit.setHasCompletedTheTurn(true);

    currentUnit.setIsCurrentUnit(false);

    const unitsInTurn =
      SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(attackingTeam);

    AttackTurnService.getNextAttackingUnit(unitsInTurn)?.setIsCurrentUnit(true);

    AttackTurnService.isTheEndOfTurn(attackingTeam, currentUnit);
  };

  public static getCurrentAttackingUnit(
    unitsInTurn: Array<units>
  ): units | null {
    return unitsInTurn.find(unit => !unit.getHasCompletedTheTurn()) || null;
  }

  public static getNextAttackingUnit(unitsInTurn: Array<units>): units | null {
    return (
      unitsInTurn[
        unitsInTurn.findIndex(
          unit =>
            unit === unitsInTurn.find(unit => !unit.getHasCompletedTheTurn())
        )
      ] || null
    );
  }

  public static isTheEndOfTurn = (
    attackingTeam: Team,
    currentAttackingUnit: units
  ): boolean => {
    const unitsInTurn =
      SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(attackingTeam);

    // if current attacking unit is the last in the attacking team to take action -->
    // finish the turn for this team
    if (
      unitsInTurn.findIndex(unit => unit === currentAttackingUnit) ===
      unitsInTurn.length - 1
    ) {
      attackingTeam.setIsAttackTurnCompleted(true);

      attackingTeam.getUnits().forEach(untiRow =>
        untiRow.forEach(unit => {
          unit.setHasCompletedTheTurn(false);
        })
      );
      return true;
    }
    return false;
  };
}
