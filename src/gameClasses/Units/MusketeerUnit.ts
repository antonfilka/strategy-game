import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class MusketeerUnit extends Unit {
  constructor(
    id: string = v4(),
    type: string = unitsTypes.mage,
    name: string = "Musketeer",
    maxHp: number = 50,
    currentHp: number = maxHp,
    damage: number = 20,
    initiative: number = 40,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    image: string = unitsImages.musketeer
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
