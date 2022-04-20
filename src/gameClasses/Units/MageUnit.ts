import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class MageUnit extends Unit {
  constructor(
    id: string = v4(),
    type: string = unitsTypes.paralyzer,
    name: string = "Mage",
    maxHp: number = 80,
    currentHp: number = maxHp,
    damage: number = 0,
    initiative: number = 20,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    image: string = unitsImages.mage
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
      isAttackTarget,
      isHealTarget,
      isParalyzeTarget,
      image
    );
  }
}
