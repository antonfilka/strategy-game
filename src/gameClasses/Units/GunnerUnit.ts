import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class GunnerUnit extends Unit {
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.range;
    this.name = "Gunner";
    this.maxHp = 75;
    this.currentHp = this.maxHp;
    this.damage = 30;
    this.initiative = 60;
    this.image = unitsImages.gunner;
  }
}
