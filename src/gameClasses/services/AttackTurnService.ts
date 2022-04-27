import DefinePossibleTargets from "./DefinePossibleTargets";
import { units } from "./RandomUnitGenerator";
import SortAndCreateUnitsForTurn from "./SortAndCreateUnitsForTurn";
import TurnService from "./TurnService";
import UnitActions from "./UnitActions";
import Team from "../Team";

export default class AttackTurnService {
  public static AttackTurnService = (
    attackingTeam: Team,
    enemyTeam: Team,
    currentTarget: units | null
  ) => {
    let currentAttackingUnit = AttackTurnService.AttackTurnPrepare(
      attackingTeam,
      enemyTeam,
      currentTarget
    );

    if (!currentAttackingUnit) {
      attackingTeam.setIsAttackTurnCompleted(true);
      //clearing flags
      attackingTeam.getUnits().forEach((untiRow) =>
        untiRow.forEach((unit) => {
          unit.setHasCompletedTheTurn(false);
        })
      );
      return;
    }
    console.log(currentAttackingUnit);

    if (currentAttackingUnit.getIsDefending()) {
      TurnService.isTheEndOfTurn(attackingTeam, currentAttackingUnit);
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

    if (attackResult)
      AttackTurnService.cleanTargetsHighlights(attackingTeam, enemyTeam);
    TurnService.isTheEndOfTurn(attackingTeam, currentAttackingUnit);
  };

  public static AttackTurnPrepare = (
    attackingTeam: Team,
    enemyTeam: Team,
    currentTarget: units | null
  ): units | void => {
    //  prepare units who are not dead and not paralyzed
    SortAndCreateUnitsForTurn.sortAndCreateUnitsForTurn(attackingTeam);

    // getting current unit in turn
    let currentAttackingUnit =
      AttackTurnService.getCurrentAttackingUnit(attackingTeam);

    if (!currentAttackingUnit) {
      return;
    }

    currentAttackingUnit.setIsCurrentUnit(true);

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

  public static getCurrentAttackingUnit(attackingTeam: Team): units | null {
    return (
      attackingTeam
        .getUnitsInTurn()
        .find((unit) => !unit.getHasCompletedTheTurn()) || null
    );
  }

  public static cleanTargetsHighlights = (
    attackingTeam: Team,
    enemyTeam: Team
  ) => {
    attackingTeam.getUnits().forEach((untiRow) =>
      untiRow.forEach((unit) => {
        unit.setIsAttackTarget(false);
        unit.setIsHealTarget(false);
        unit.setIsParalyzeTarget(false);
      })
    );
    enemyTeam.getUnits().forEach((untiRow) =>
      untiRow.forEach((unit) => {
        unit.setIsAttackTarget(false);
        unit.setIsHealTarget(false);
        unit.setIsParalyzeTarget(false);
      })
    );
  };
}
