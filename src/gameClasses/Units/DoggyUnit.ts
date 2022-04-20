import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";

export default class DoggyUnit extends Unit {
  private heal: number = 40;
  constructor(
    team: string,
    id: string = v4(),
    type: string = unitsTypes.healerSingle,
    name: string = "Doggy",
    maxHp: number = 90,
    currentHp: number = maxHp,
    damage: number = 0,
    initiative: number = 20,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    image: string = unitsImages.doggy
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
