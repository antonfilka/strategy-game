import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class MageUnit extends Unit {
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.paralyzer;
    this.name = "Mage";
    this.maxHp = 80;
    this.currentHp = this.maxHp;
    this.damage = 0;
    this.initiative = 20;
    this.image = unitsImages.mage;
  }
}
