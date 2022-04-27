import { units } from "./RandomUnitGenerator";

export default class UnitDefend {
  public static defend = (unit: units): void => {
    unit.setIsDefending(true);
    unit.setHasCompletedTheTurn(true);
    unit.setIsCurrentUnit(false);
  };
}
