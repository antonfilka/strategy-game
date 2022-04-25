import Unit, { unitsImages, unitsTypes } from "./Unit";
import { units } from "../services/RandomUnitGenerator";
import { v4 } from "uuid";

export default class PirateUnit extends Unit {
  constructor(
    team: string,
    position: Array<number>,
    id: string = v4(),
    type: string = unitsTypes.melee,
    name: string = "Pirate",
    maxHp: number = 100,
    currentHp: number = maxHp,
    damage: number = 25,
    initiative: number = 50,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    isDefending = false,
    isOnHover = false,
    image: string = unitsImages.pirate,
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
