import RandomUnitGenerator, { units } from "./services/RandomUnitGenerator";
import { teams } from "./Units/Unit";

interface ITeam {
  team: string;
}

export default class Team {
  private team: string;
  private isMyTurn: boolean;
  private isDefending: boolean;
  private units: Array<Array<units>>;
  private generator;
  private unitsInTurn: Array<units> = [];

  constructor(props: ITeam) {
    this.team = props.team;
    this.isMyTurn = props.team === teams.teamB ? false : true;
    this.isDefending = false;
    this.generator = new RandomUnitGenerator({ team: this.team });
    this.units =
      this.team === teams.teamA
        ? [
            [
              this.generator.getUnit([1, 1]),
              this.generator.getUnit([1, 2]),
              this.generator.getUnit([1, 3]),
            ],
            [
              this.generator.getUnit([2, 1]),
              this.generator.getUnit([2, 2]),
              this.generator.getUnit([2, 3]),
            ],
          ]
        : [
            [
              this.generator.getUnit([3, 1]),
              this.generator.getUnit([3, 2]),
              this.generator.getUnit([3, 3]),
            ],
            [
              this.generator.getUnit([4, 1]),
              this.generator.getUnit([4, 2]),
              this.generator.getUnit([4, 3]),
            ],
          ];
    this.sortAndCreateUnitsForTurn();
  }

  public defend = (): void => {
    if (this.getIsMyTurn()) {
      if (this.getIsDefending()) {
        alert("You are defending now");
        return;
      }

      this.setIsDefending(true);

      this.units.forEach((row) =>
        row.forEach((unit) => unit.setIsDefending(true))
      );
    } else {
      alert("Wait until your turn");
      return;
    }
  };

  public attack = (): void => {
    if (this.getIsMyTurn()) {
    } else {
      alert("Wait until your turn");
      return;
    }
  };

  public sortAndCreateUnitsForTurn = (): void => {
    this.unitsInTurn.splice(0, this.unitsInTurn.length);
    this.units.forEach((row) =>
      row.forEach((unit) => {
        !unit.getIsDead() && !unit.getIsParalyzed()
          ? this.unitsInTurn.push(unit)
          : null;
      })
    );
    this.unitsInTurn.sort((a, b) => b.getInitiative() - a.getInitiative());
  };

  public cleanUnitsDefendingFlag = (): void => {
    this.units.forEach((unitRow) =>
      unitRow.forEach((unit) => unit.setIsDefending(false))
    );
  };

  public cleanUnitsParalyzedFlag = (): void => {
    this.units.forEach((unitRow) =>
      unitRow.forEach((unit) => unit.setIsParalyzed(false))
    );
  };

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

  public getUnits = (): Array<Array<units>> => {
    return this.units;
  };

  public getUnitsInTurn = (): Array<units> => {
    return this.unitsInTurn;
  };
}
