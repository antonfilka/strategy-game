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
  private attackTurnIsCompleted: boolean = false;

  constructor(props: IAttackTurn) {
    this.teamA = props.teamA;
    this.teamB = props.teamB;
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
          }
        } else {
          // check if any dead units
        }
      })
    );

    if (possibleTargets.length === 0) {
      unit.setHasCompletedTheTurn(true);
      alert("This unit stands to far to attack anybody");
    }
    unit.setPossibleTargets(possibleTargets);
  };

  public AttackTurnPrepare = (attackingTeam: Team): units | void => {
    attackingTeam.sortAndCreateUnitsForTurn();

    const enemyTeam =
      attackingTeam.getTeam() === teams.teamA ? this.teamB : this.teamA;

    let currentAttackingUnit =
      attackingTeam
        .getUnitsInTurn()
        .find((unit) => !unit.getHasCompletedTheTurn()) || false;

    if (!currentAttackingUnit) {
      console.log("Turn is completed");
      this.attackTurnIsCompleted = true;
      return;
    }

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
    let currentAttackingUnit = this.AttackTurnPrepare(attackingTeam);

    if (!currentAttackingUnit) {
      return;
    }

    if (currentAttackingUnit.getHasCompletedTheTurn()) {
      return;
    } else {
      if (!this.currentTarget) {
        console.log("select target ");
        return;
      }

      currentAttackingUnit.setTarget([this.currentTarget]);
      let attackResult = 0;
      attackResult = currentAttackingUnit.attack();
      if (attackResult) {
        this.cleanTargetsHighlights(attackingTeam.getTeam());
      }
      this.setCurrentTarget(null);
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
}
