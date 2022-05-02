import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class MusketeerUnit extends Unit {
  constructor(
    team: string,
    position: Array<number>,
    id: string = v4(),
    type: string = unitsTypes.mage,
    name: string = "Musketeer",
    maxHp: number = 50,
    currentHp: number = maxHp,
    damage: number = 20,
    initiative: number = 40
  ) {
    super(team, position);
    this.id = v4();
    this.type = unitsTypes.mage;
    this.name = "Musketeer";
    this.maxHp = 50;
    this.currentHp = this.maxHp;
    this.damage = 20;
    this.initiative = 40;
    this.image = unitsImages.musketeer;
  }
}
