import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class MageUnit extends Unit {
  constructor(
    team: string,
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
    isDefending = false,
    isOnHover = false,
    image: string = unitsImages.mage
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
