import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class PriestUnit extends Unit {
  private heal: number = 40;
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.healerMass;
    this.name = "Priest";
    this.maxHp = 130;
    this.currentHp = this.maxHp;
    this.damage = 0;
    this.initiative = 20;
    this.image = unitsImages.priest;
  }

  public getHeal = (): number => {
    return this.heal;
  };
}
