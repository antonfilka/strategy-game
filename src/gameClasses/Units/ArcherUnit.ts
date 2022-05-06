import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class ArcherUnit extends Unit {
  constructor(team: string, position: Array<number>) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.range;
    this.name = "Archer";
    this.maxHp = 90;
    this.currentHp = this.maxHp;
    this.damage = 45;
    this.initiative = 60;
    this.image = unitsImages.archer;
  }
}
