import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";
import { units } from "../services/RandomUnitGenerator";

export default class PriestUnit extends Unit {
  private heal: number = 40;
  constructor(
    team: string,
    position: Array<number>,
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
    isOnHover = false,
    image: string = unitsImages.priest,
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

  public healUnit = (): number => {
    if (this.getPossibleTargets().includes(this.getTarget()[0])) {
      this.getPossibleTargets().forEach((unitToHeal) =>
        unitToHeal.applyHeal(this.heal)
      );
      this.setHasCompletedTheTurn(true);
      this.setIsCurrentUnit(false);
      console.log("Heal completed");
    } else {
      alert("You cant Heal this unit");
      return 0;
    }
    return 1;
  };
}
