import { units } from "./services/RandomUnitGenerator";
import Team from "./Team";
import DoggyUnit from "./Units/DoggyUnit";
import PirateUnit from "./Units/PirateUnit";
import { teams, unitsTypes } from "./Units/Unit";

interface IAttackTurn {
  teamA: Team;
  teamB: Team;
}

export default class AttackTurn {
  private teamA;
  private teamB;
  private currentTarget: units | null = null;
  private attackTurnIsCompleted: boolean;

  constructor(props: IAttackTurn) {
    this.teamA = props.teamA;
    this.teamB = props.teamB;
    this.attackTurnIsCompleted = false;
  }

  public definePossibleMeleeTargets = (unit: units, enemyTeam: Team) => {
    unit.getPossibleTargets().length > 0 && !this.currentTarget
      ? alert("choose target and attack it")
      : null;
    const possibleTargets: Array<units> = [];

    enemyTeam.getUnits().forEach((rowOfEnemyUnits) =>
      rowOfEnemyUnits.forEach((enemyUnit) => {
        let rowDiff = Math.abs(
          enemyUnit.getPosition()[0] - unit.getPosition()[0]
        );
        if (rowDiff === 1) {
          let columnDiff = Math.abs(
            enemyUnit.getPosition()[1] - unit.getPosition()[1]
          );
          if (columnDiff <= 1) {
            if (!enemyUnit.getIsDead()) {
              enemyUnit.setIsAttackTarget(true);
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
                  enemyUnit.setIsAttackTarget(true);
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
                  enemyUnit.setIsAttackTarget(true);
                  possibleTargets.push(enemyUnit);
                }
              }
            }
          }
        } else if (rowDiff === 2) {
          let secondRowIsReachable = true;
          enemyUnit.getTeam() === teams.teamB
            ? enemyTeam
                .getUnits()[0]
                .forEach((enemyUnit) =>
                  enemyUnit.getIsDead()
                    ? (secondRowIsReachable = secondRowIsReachable && true)
                    : (secondRowIsReachable = secondRowIsReachable && false)
                )
            : enemyTeam
                .getUnits()[1]
                .forEach((enemyUnit) =>
                  enemyUnit.getIsDead()
                    ? (secondRowIsReachable = secondRowIsReachable && true)
                    : (secondRowIsReachable = secondRowIsReachable && false)
                );

          if (secondRowIsReachable) {
            if (!enemyUnit.getIsDead()) {
              enemyUnit.setIsAttackTarget(true);
              possibleTargets.push(enemyUnit);
            }
          }
        }
      })
    );

    //  ? if no targets -> exit
    if (possibleTargets.length === 0) {
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      alert("This unit stands too far to attack anybody");
      this.checkIsTheLastUnit(
        enemyTeam.getTeam() === teams.teamA ? this.teamB : this.teamA,
        unit
      );
    }
    unit.setPossibleTargets(possibleTargets);
  };

  public definePossibleRangeTargets = (unit: units, enemyTeam: Team) => {
    unit.getPossibleTargets().length > 0 && !this.currentTarget
      ? alert("choose target and attack it")
      : null;
    const possibleTargets: Array<units> = [];

    enemyTeam.getUnits().forEach((unitRow) =>
      unitRow.forEach((enemyUnit) => {
        if (!enemyUnit.getIsDead()) {
          enemyUnit.setIsAttackTarget(true);
          possibleTargets.push(enemyUnit);
        }
      })
    );
    if (possibleTargets.length === 0) {
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      alert("This unit stands too far to attack anybody");
      this.checkIsTheLastUnit(
        enemyTeam.getTeam() === teams.teamA ? this.teamB : this.teamA,
        unit
      );
    }
    unit.setPossibleTargets(possibleTargets);
  };

  public definePossibleHealSingleTargets = (unit: units, myTeam: Team) => {
    unit.getPossibleTargets().length > 0 && !this.currentTarget
      ? alert("choose target to heal")
      : null;
    const possibleTargets: Array<units> = [];

    myTeam.getUnits().forEach((unitRow) =>
      unitRow.forEach((myUnit) => {
        if (!myUnit.getIsDead() && myUnit !== unit) {
          myUnit.setIsHealTarget(true);
          possibleTargets.push(myUnit);
        }
      })
    );
    if (possibleTargets.length === 0) {
      unit.setHasCompletedTheTurn(true);
      unit.setIsCurrentUnit(false);
      alert("This unit stands too far to attack anybody");
      this.checkIsTheLastUnit(
        myTeam.getTeam() === teams.teamB ? this.teamB : this.teamA,
        unit
      );
    }
    unit.setPossibleTargets(possibleTargets);
  };

  public AttackTurnPrepare = (attackingTeam: Team): units | void => {
    //  ? prepare units who are not dead and not paralyzed
    attackingTeam.sortAndCreateUnitsForTurn();

    let enemyTeam =
      attackingTeam.getTeam() === teams.teamA ? this.teamB : this.teamA;

    let currentAttackingUnit =
      attackingTeam
        .getUnitsInTurn()
        .find((unit) => !unit.getHasCompletedTheTurn()) || false;

    //  ? exit if no attacking unit at the moment
    if (!currentAttackingUnit) {
      return;
    }

    currentAttackingUnit.setIsCurrentUnit(true);

    if (attackingTeam.getIsDefending()) {
      currentAttackingUnit.defend();
      attackingTeam.setIsDefending(false);
      return currentAttackingUnit;
    }

    //  ? define targets for this unit

    if (currentAttackingUnit.getType() === unitsTypes.melee) {
      this.definePossibleMeleeTargets(currentAttackingUnit, enemyTeam);
    } else if (currentAttackingUnit.getType() === unitsTypes.range) {
      this.definePossibleRangeTargets(currentAttackingUnit, enemyTeam);
    } else if (currentAttackingUnit.getType() === unitsTypes.healerSingle) {
      this.definePossibleHealSingleTargets(currentAttackingUnit, attackingTeam);
    }

    return currentAttackingUnit;
  };

  public cleanTargetsHighlights = () => {
    this.teamA.getUnits().forEach((untiRow) =>
      untiRow.forEach((unit) => {
        unit.setIsAttackTarget(false);
        unit.setIsHealTarget(false);
        unit.setIsParalyzeTarget(false);
      })
    );

    this.teamB.getUnits().forEach((untiRow) =>
      untiRow.forEach((unit) => {
        unit.setIsAttackTarget(false);
        unit.setIsHealTarget(false);
        unit.setIsParalyzeTarget(false);
      })
    );
  };

  public AttackTurn = (attackingTeam: Team) => {
    //  ? main attack method
    let currentAttackingUnit = this.AttackTurnPrepare(attackingTeam);

    //  ? if no units to use -> null flags
    if (!currentAttackingUnit) {
      this.setAttackTurnIsCompleted(true);
      attackingTeam.getUnits().forEach((untiRow) =>
        untiRow.forEach((unit) => {
          unit.setHasCompletedTheTurn(false);
          unit.setPossibleTargets([]);
        })
      );
      return;
    }

    if (currentAttackingUnit.getIsDefending()) {
      this.checkIsTheLastUnit(attackingTeam, currentAttackingUnit);
      return;
    }

    if (!this.currentTarget) {
      console.log("select target ");
      return;
    }

    currentAttackingUnit.setTarget([this.currentTarget]);

    let attackResult = 0;

    if (currentAttackingUnit instanceof DoggyUnit) {
      attackResult = currentAttackingUnit.healUnit();
    } else {
      attackResult = currentAttackingUnit.attack();
    }

    this.setCurrentTarget(null);

    if (attackResult) {
      this.cleanTargetsHighlights();
      this.checkIsTheLastUnit(attackingTeam, currentAttackingUnit);
    }
  };

  private checkIsTheLastUnit = (
    attackingTeam: Team,
    currentAttackingUnit: units
  ): void => {
    if (
      attackingTeam
        .getUnitsInTurn()
        .findIndex((unit) => unit === currentAttackingUnit) ===
      attackingTeam.getUnitsInTurn().length - 1
    ) {
      console.log("Turn is completed");
      this.setAttackTurnIsCompleted(true);
      attackingTeam.getUnits().forEach((untiRow) =>
        untiRow.forEach((unit) => {
          unit.setHasCompletedTheTurn(false);
          unit.setPossibleTargets([]);
        })
      );
    }
  };

  public setCurrentTarget = (unit: units | null): void => {
    this.currentTarget = unit;
  };

  public getCurrentTarget = (): units | null => {
    return this.currentTarget;
  };

  public getAttackTurnIsCompleted = (): boolean => {
    return this.attackTurnIsCompleted;
  };

  public setAttackTurnIsCompleted = (attackTurnIsCompleted: boolean): void => {
    this.attackTurnIsCompleted = attackTurnIsCompleted;
  };
}
