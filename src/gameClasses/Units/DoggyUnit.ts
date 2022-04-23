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
    isDefending = false,
    isOnHover = false,
    image: string = unitsImages.doggy,
    position: Array<number>,
    hasCompletedTheTurn: boolean = false,
    possibleTargets: Array<string> = []
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
      image,
      position,
      hasCompletedTheTurn,
      possibleTargets
    );
  }
}
