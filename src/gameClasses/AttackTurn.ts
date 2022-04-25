import { units } from "./services/RandomUnitGenerator";
import Team from "./Team";
import PirateUnit from "./Units/PirateUnit";
import { teams } from "./Units/Unit";

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
          if (columnDiff <= 1 && columnDiff >= -1) {
            if (!enemyUnit.getIsDead()) {
              enemyUnit.setIsAttackTarget(true);
              possibleTargets.push(enemyUnit);
            }
          } else {
          }
        } else {
          let clearRow = false;
          rowOfEnemyUnits.forEach((enemyUnit) =>
            enemyUnit.getPosition()[0] === 1 && enemyUnit.getIsDead()
              ? (clearRow = true)
              : (clearRow = false)
          );
          let columnDiff = Math.abs(
            enemyUnit.getPosition()[1] - unit.getPosition()[1]
          );
          if (clearRow && columnDiff >= -1) {
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
      console.log("no curr unit", attackingTeam);
      return;
    }

    currentAttackingUnit.setIsCurrentUnit(true);

    //  ? define targets for this unit
    this.definePossibleMeleeTargets(currentAttackingUnit, enemyTeam);

    return currentAttackingUnit;
  };

  public cleanTargetsHighlights = (attackingTeam: string) => {
    let teamToClean = attackingTeam === teams.teamA ? this.teamB : this.teamA;

    teamToClean.getUnits().forEach((untiRow) =>
      untiRow.forEach((unit) => {
        unit.setIsAttackTarget(false);
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

    if (!this.currentTarget) {
      console.log("select target ");
      return;
    }

    currentAttackingUnit.setTarget([this.currentTarget]);

    let attackResult = 0;
    attackResult = currentAttackingUnit.attack();

    if (attackResult) {
      this.cleanTargetsHighlights(attackingTeam.getTeam());
      currentAttackingUnit.setIsCurrentUnit(false);
    }
    this.setCurrentTarget(null);

    this.checkIsTheLastUnit(attackingTeam, currentAttackingUnit);
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
