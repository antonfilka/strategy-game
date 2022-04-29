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
    const unitsInTurn =
      SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(attackingTeam);

    let currentAttackingUnit = AttackTurnService.AttackTurnPrepare(
      attackingTeam,
      enemyTeam,
      unitsInTurn
    );

    if (!currentAttackingUnit) {
      attackingTeam.setIsAttackTurnCompleted(true);
      //clearing flags
      attackingTeam.getUnits().forEach(untiRow =>
        untiRow.forEach(unit => {
          unit.setHasCompletedTheTurn(false);
        })
      );
      return;
    }

    currentAttackingUnit.setIsCurrentUnit(true);

    if (currentAttackingUnit.getIsDefending()) {
      currentAttackingUnit.setIsCurrentUnit(false);
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
      AttackTurnService.cleanTargetsHighlights(attackingTeam, enemyTeam);
      currentAttackingUnit.setHasCompletedTheTurn(true);
      currentAttackingUnit.setIsCurrentUnit(false);
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
    //  prepare units who are not dead and not paralyzed

    // getting current unit in turn
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

    const meleeTargets = "melee";
    const rangeTargets = ["range", "mage", "paralyzer"];
    const healTargets = ["healerSingle", "healerMass"];

    if (currentAttackingUnit.getType() === meleeTargets) {
      DefinePossibleTargets.definePossibleMeleeTargets(
        currentAttackingUnit,
        enemyTeam
      );
    } else if (rangeTargets.includes(currentAttackingUnit.getType())) {
      DefinePossibleTargets.definePossibleRangeTargets(
        currentAttackingUnit,
        enemyTeam
      );
    } else if (healTargets.includes(currentAttackingUnit.getType())) {
      DefinePossibleTargets.definePossibleHealTargets(
        currentAttackingUnit,
        attackingTeam
      );
    }
    return currentAttackingUnit;
  };

  public static getCurrentAttackingUnit(
    unitsInTurn: Array<units>
  ): units | null {
    return unitsInTurn.find(unit => !unit.getHasCompletedTheTurn()) || null;
  }

  public static cleanTargetsHighlights = (
    attackingTeam: Team,
    enemyTeam: Team
  ) => {
    attackingTeam.getUnits().forEach(unitRow =>
      unitRow.forEach(unit => {
        unit.setIsAttackTarget(false);
        unit.setIsHealTarget(false);
        unit.setIsParalyzeTarget(false);
      })
    );
    enemyTeam.getUnits().forEach(unitRow =>
      unitRow.forEach(unit => {
        unit.setIsAttackTarget(false);
        unit.setIsHealTarget(false);
        unit.setIsParalyzeTarget(false);
      })
    );
  };

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
