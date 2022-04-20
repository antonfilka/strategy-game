import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class ArcherUnit extends Unit {
  constructor(
    team: string,
    id: string = v4(),
    type: string = unitsTypes.range,
    name: string = "Archer",
    maxHp: number = 90,
    currentHp: number = maxHp,
    damage: number = 45,
    initiative: number = 60,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,

    image: string = unitsImages.archer
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
      image
    );
  }
}
