import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";
import { units } from "../services/RandomUnitGenerator";

export default class SworderUnit extends Unit {
  constructor(
    team: string,
    position: Array<number>,
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
    isOnHover = false,
    image: string = unitsImages.sworder,
    hasCompletedTheTurn: boolean = false,
    possibleTargets: Array<units> = [],
    target: units[],
    isCurrentUnit: boolean
  ) {
    super(
      team,
      position,
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
      hasCompletedTheTurn,
      possibleTargets,
      target,
      isCurrentUnit
    );
  }
}
