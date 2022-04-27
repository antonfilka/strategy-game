import Team from "../Team";
import DoggyUnit from "../Units/DoggyUnit";
import PriestUnit from "../Units/PriestUnit";
import DefinePossibleTargets from "./DefinePossibleTargets";
import { units } from "./RandomUnitGenerator";

export default class UnitActions {
  public static defend = (unit: units): void => {
    unit.setIsDefending(true);
    unit.setHasCompletedTheTurn(true);
    unit.setIsCurrentUnit(false);
  };

  public static attack = (
    unit: units,
    attackingTeam: Team,
    enemyTeam: Team,
    target: units
  ): boolean => {
    const singleAttackUnit = ["Archer", "Gunner", "Sworder", "Pirate"];
    const multiAttackUnit = ["Bomber", "Musketeer"];
    const paralyzeSingle = "Mage";
    const healSingle = "Doggy";
    const healMany = "Priest";

    if (singleAttackUnit.includes(unit.getName())) {
      return UnitActions.attackSingle(unit, attackingTeam, enemyTeam, target);
    } else if (multiAttackUnit.includes(unit.getName())) {
      return UnitActions.attackMany(unit, attackingTeam, enemyTeam, target);
    } else if (healSingle === unit.getName()) {
      return UnitActions.healSingle(unit, attackingTeam, target);
    } else if (healMany === unit.getName()) {
      return UnitActions.healMany(unit, attackingTeam, target);
    } else if (paralyzeSingle === unit.getName()) {
      return UnitActions.paralyzeSingle(unit, attackingTeam, enemyTeam, target);
    }
    return false;
  };

  public static attackSingle = (
    unit: units,
    attackingTeam: Team,
    enemyTeam: Team,
    target: units
  ): boolean => {
    let possibleTargets = [];
    if (unit.getType() === "range") {
      possibleTargets = DefinePossibleTargets.definePossibleRangeTargets(
        unit,
        enemyTeam
      );
    } else {
      possibleTargets = DefinePossibleTargets.definePossibleMeleeTargets(
        unit,
        enemyTeam
      );
    }

    if (possibleTargets.length === 0)
      DefinePossibleTargets.noTargetsAction(unit, attackingTeam);

    if (possibleTargets.includes(target)) {
      target.applyDamage(unit.getDamage());
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      return true;
    }
    alert("You cant attack this unit");
    return false;
  };

  public static attackMany = (
    unit: units,
    attackingTeam: Team,
    enemyTeam: Team,
    target: units
  ): boolean => {
    const possibleTargets = DefinePossibleTargets.definePossibleRangeTargets(
      unit,
      enemyTeam
    );

    if (possibleTargets.length === 0)
      DefinePossibleTargets.noTargetsAction(unit, attackingTeam);

    if (possibleTargets.includes(target)) {
      possibleTargets.forEach((enemyUnit) =>
        enemyUnit.applyDamage(unit.getDamage())
      );
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      return true;
    }
    alert("You cant attack this unit");
    return false;
  };

  public static healSingle = (
    unit: units,
    attackingTeam: Team,
    target: units
  ): boolean => {
    const possibleTargets = DefinePossibleTargets.definePossibleHealTargets(
      unit,
      attackingTeam
    );

    if (possibleTargets.length === 0)
      DefinePossibleTargets.noTargetsAction(unit, attackingTeam);

    if (possibleTargets.includes(target) && unit instanceof DoggyUnit) {
      target.applyHeal(unit.getHeal());
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      return true;
    }
    alert("You cant Heal this unit");
    return false;
  };

  public static healMany = (
    unit: units,
    attackingTeam: Team,
    target: units
  ): boolean => {
    const possibleTargets = DefinePossibleTargets.definePossibleHealTargets(
      unit,
      attackingTeam
    );

    if (possibleTargets.length === 0)
      DefinePossibleTargets.noTargetsAction(unit, attackingTeam);

    if (possibleTargets.includes(target) && unit instanceof PriestUnit) {
      possibleTargets.forEach((unitToHeal) =>
        unitToHeal.applyHeal(unit.getHeal())
      );
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      return true;
    }
    alert("You cant Heal this unit");
    return false;
  };

  public static paralyzeSingle = (
    unit: units,
    attackingTeam: Team,
    enemyTeam: Team,
    target: units
  ): boolean => {
    const possibleTargets = DefinePossibleTargets.definePossibleRangeTargets(
      unit,
      enemyTeam
    );

    if (possibleTargets.length === 0)
      DefinePossibleTargets.noTargetsAction(unit, attackingTeam);

    if (possibleTargets.includes(target)) {
      target.setIsParalyzed(true);
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      return true;
    }
    alert("You cant attack this unit");
    return false;
  };
}
