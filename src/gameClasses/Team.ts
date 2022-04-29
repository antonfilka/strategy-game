import RandomUnitGenerator, { units } from "./services/RandomUnitGenerator";
import { teams } from "./Units/Unit";

interface ITeam {
  team: string;
}

export default class Team {
  private team: string;
  private isMyTurn: boolean;
  private isDefending: boolean;
  private isAttacking: boolean;
  private isAttackTurnCompleted: boolean;
  private units: Array<Array<units>>;

  constructor(props: ITeam) {
    this.team = props.team;
    this.isMyTurn = props.team === teams.teamB ? false : true;
    this.isDefending = false;
    this.isAttacking = false;
    this.units =
      this.team === teams.teamA
        ? [
            [
              RandomUnitGenerator.getRandomUnit(this.team, [1, 1]),
              RandomUnitGenerator.getRandomUnit(this.team, [1, 2]),
              RandomUnitGenerator.getRandomUnit(this.team, [1, 3]),
            ],
            [
              RandomUnitGenerator.getRandomUnit(this.team, [2, 1]),
              RandomUnitGenerator.getRandomUnit(this.team, [2, 2]),
              RandomUnitGenerator.getRandomUnit(this.team, [2, 3]),
            ],
          ]
        : [
            [
              RandomUnitGenerator.getRandomUnit(this.team, [3, 1]),
              RandomUnitGenerator.getRandomUnit(this.team, [3, 2]),
              RandomUnitGenerator.getRandomUnit(this.team, [3, 3]),
            ],
            [
              RandomUnitGenerator.getRandomUnit(this.team, [4, 1]),
              RandomUnitGenerator.getRandomUnit(this.team, [4, 2]),
              RandomUnitGenerator.getRandomUnit(this.team, [4, 3]),
            ],
          ];
    this.isAttackTurnCompleted = false;
  }

  public getTeam = (): string => {
    return this.team;
  };

  public getIsMyTurn = (): boolean => {
    return this.isMyTurn;
  };

  public setIsMyTurn = (isMyTurn: boolean) => {
    this.isMyTurn = isMyTurn;
  };

  public getIsDefending = (): boolean => {
    return this.isDefending;
  };

  public setIsDefending = (isDefending: boolean) => {
    this.isDefending = isDefending;
  };

  public getIsAttacking = (): boolean => {
    return this.isAttacking;
  };

  public setIsAttacking = (isAttacking: boolean) => {
    this.isAttacking = isAttacking;
  };
  public getUnits = (): Array<Array<units>> => {
    return this.units;
  };

  public getIsAttackTurnCompleted = (): boolean => {
    return this.isAttackTurnCompleted;
  };

  public setIsAttackTurnCompleted = (isAttackTurnCompleted: boolean): void => {
    this.isAttackTurnCompleted = isAttackTurnCompleted;
  };
}
