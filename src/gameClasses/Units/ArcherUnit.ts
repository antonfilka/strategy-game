import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class ArcherUnit extends Unit {
  constructor(
    id: string = v4(),
    type: string = unitsTypes.range,
    name: string = "Archer",
    maxHp: number = 90,
    currentHp: number = maxHp,
    damage: number = 45,
    initiative: number = 60,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    image: string = unitsImages.archer
  ) {
    super(
      id,
      type,
      name,
      maxHp,
      currentHp,
      damage,
      initiative,
      isParalyzed,
      isDead,
      image
    );
  }
}
