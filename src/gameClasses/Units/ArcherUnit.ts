import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";
import { units } from "../services/RandomUnitGenerator";

export default class ArcherUnit extends Unit {
  constructor(
    team: string,
    position: Array<number>,
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
    isDefending = false,
    isOnHover = false,
    image: string = unitsImages.archer,
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
