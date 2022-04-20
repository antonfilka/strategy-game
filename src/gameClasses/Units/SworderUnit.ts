import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class SworderUnit extends Unit {
  constructor(
    team: string,
    id: string = v4(),
    type: string = unitsTypes.melee,
    name: string = "Sworder",
    maxHp: number = 150,
    currentHp: number = maxHp,
    damage: number = 60,
    initiative: number = 50,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    isDefending = false,
    image: string = unitsImages.sworder
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
