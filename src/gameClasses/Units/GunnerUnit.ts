import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class GunnerUnit extends Unit {
  constructor(
    team: string,
    id: string = v4(),
    type: string = unitsTypes.range,
    name: string = "Gunner",
    maxHp: number = 75,
    currentHp: number = maxHp,
    damage: number = 30,
    initiative: number = 60,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    isDefending = false,
    image: string = unitsImages.gunner
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
      image
    );
  }
}
