import Unit, { unitsImages, unitsTypes } from "./Unit";
import { v4 } from "uuid";
import { units } from "../services/RandomUnitGenerator";

export default class BomberUnit extends Unit {
  constructor(
    team: string,
    position: Array<number>,
    id: string = v4(),
    type: string = unitsTypes.mage,
    name: string = "Bomber",
    maxHp: number = 90,
    currentHp: number = maxHp,
    damage: number = 30,
    initiative: number = 40,
    isParalyzed: boolean = false,
    isDead: boolean = false,
    isAttackTarget: boolean = false,
    isHealTarget: boolean = false,
    isParalyzeTarget: boolean = false,
    isDefending = false,
    isOnHover = false,
    image: string = unitsImages.bomber,
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

  public attack = (): number => {
    if (this.getPossibleTargets().includes(this.getTarget()[0])) {
      this.getPossibleTargets().forEach((enemyUnit) =>
        enemyUnit.applyDamage(this.getDamage())
      );

      this.setHasCompletedTheTurn(true);
      this.setIsCurrentUnit(false);
      console.log("Attack completed");
    } else {
      alert("You cant attack this unit");
      return 0;
    }
    return 1;
  };
}
