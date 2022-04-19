import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class BomberUnit extends Unit {
  constructor(
    id: string = v4(),
    type: string = unitsTypes.mage,
    name: string = "Bomber",
    maxHp: number = 90,
    currentHp: number = maxHp,
    damage: number = 300,
    initiative: number = 40,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    image: string = unitsImages.bomber
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
