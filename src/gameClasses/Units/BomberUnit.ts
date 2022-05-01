import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class BomberUnit extends Unit {
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.mage;
    this.name = "Bomber";
    this.maxHp = 90;
    this.currentHp = this.maxHp;
    this.damage = 130;
    this.initiative = 40;
    this.image = unitsImages.bomber;
  }
}
