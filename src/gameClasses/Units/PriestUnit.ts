import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class PriestUnit extends Unit {
  private heal: number = 25;
  constructor(
    team: string,
    id: string = v4(),
    type: string = unitsTypes.healerMass,
    name: string = "Priest",
    maxHp: number = 130,
    currentHp: number = maxHp,
    damage: number = 0,
    initiative: number = 20,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    isDefending = false,
    image: string = unitsImages.priest
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
