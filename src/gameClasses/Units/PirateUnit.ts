import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class PirateUnit extends Unit {
  constructor(
    id: string = v4(),
    type: string = unitsTypes.melee,
    name: string = "Pirate",
    maxHp: number = 100,
    currentHp: number = maxHp,
    damage: number = 25,
    initiative: number = 50,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    image: string = unitsImages.pirate
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
