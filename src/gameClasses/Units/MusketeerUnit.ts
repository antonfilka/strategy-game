import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class MusketeerUnit extends Unit {
  constructor(
    team: string,
    id: string = v4(),
    type: string = unitsTypes.mage,
    name: string = "Musketeer",
    maxHp: number = 50,
    currentHp: number = maxHp,
    damage: number = 20,
    initiative: number = 40,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    isDefending = false,
    isOnHover = false,
    image: string = unitsImages.musketeer
  ) {
    super(
      team,
      id,
      type,
      name,
      maxHp,
      currentHp,
      damage,
      initiative,
      isParalyzed,
      isDead,
      isAttackTarget,
      isHealTarget,
      isParalyzeTarget,
      isDefending,
      isOnHover,
      image
    );
  }
}
