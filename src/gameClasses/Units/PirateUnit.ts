import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class PirateUnit extends Unit {
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.melee;
    this.name = "Pirate";
    this.maxHp = 100;
    this.currentHp = this.maxHp;
    this.damage = 25;
    this.initiative = 50;
    this.image = unitsImages.pirate;
  }
}
