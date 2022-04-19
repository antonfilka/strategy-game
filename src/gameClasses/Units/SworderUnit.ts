import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class SworderUnit extends Unit {
  constructor(
    id: string = v4(),
    type: string = unitsTypes.melee,
    name: string = "Sworder",
    maxHp: number = 150,
    currentHp: number = maxHp,
    damage: number = 60,
    initiative: number = 50,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    image: string = unitsImages.sworder
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
