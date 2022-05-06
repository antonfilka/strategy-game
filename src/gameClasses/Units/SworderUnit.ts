import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class SworderUnit extends Unit {
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.melee;
    this.name = "Sworder";
    this.maxHp = 150;
    this.currentHp = this.maxHp;
    this.damage = 60;
    this.initiative = 50;
    this.image = unitsImages.sworder;
  }
}
