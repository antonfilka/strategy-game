import RandomUnitGenerator, { units } from "./services/RandomUnitGenerator";
import { teams } from "./Units/Unit";

export default class Team {
  private team: string;
  private isMyTurn: boolean;
  private units: Array<Array<units>>;
  private generator;

  constructor(team: string) {
    this.team = team;
    this.isMyTurn = team === teams.teamB ? false : true;
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

  public getTeam = (): string => {
    return this.team;
  };

  public getIsMyTurn = (): boolean => {
    return this.isMyTurn;
  };

  public setIsMyTurn = (isMyTurn: boolean) => {
    this.isMyTurn = isMyTurn;
  };

  public getUnits = (): Array<Array<units>> => {
    return this.units;
  };
}
