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

  constructor(props: ITeam) {
    this.team = props.team;
    this.isMyTurn = props.team === teams.teamB ? false : true;
    this.isDefending = false;
    this.generator = new RandomUnitGenerator({ team: this.team });

    this.units = [
      [
        this.generator.getUnit(),
        this.generator.getUnit(),
        this.generator.getUnit(),
      ],
      [
        this.generator.getUnit(),
        this.generator.getUnit(),
        this.generator.getUnit(),
      ],
    ];
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
}
