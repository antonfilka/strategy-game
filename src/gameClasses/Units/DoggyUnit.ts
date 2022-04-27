import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class DoggyUnit extends Unit {
  private heal: number = 40;
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.healerSingle;
    this.name = "Doggy";
    this.maxHp = 90;
    this.currentHp = this.maxHp;
    this.damage = 0;
    this.initiative = 20;
    this.image = unitsImages.doggy;
  }

  public getHeal = (): number => {
    return this.heal;
  };
}
