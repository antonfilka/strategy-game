import ArcherUnit from "../Units/ArcherUnit";
import BomberUnit from "../Units/BomberUnit";
import DoggyUnit from "../Units/DoggyUnit";
import GunnerUnit from "../Units/GunnerUnit";
import MageUnit from "../Units/MageUnit";
import MusketeerUnit from "../Units/MusketeerUnit";
import PirateUnit from "../Units/PirateUnit";
import PriestUnit from "../Units/PriestUnit";
import SworderUnit from "../Units/SworderUnit";

export type units =
  | ArcherUnit
  | BomberUnit
  | DoggyUnit
  | GunnerUnit
  | MageUnit
  | MusketeerUnit
  | PirateUnit
  | PriestUnit
  | SworderUnit;

const units = [PirateUnit, SworderUnit, ArcherUnit, GunnerUnit, DoggyUnit];

interface IRandomUnitGenerator {
  team: string;
}

export default class RandomUnitGenerator {
  team: string;
  constructor(props: IRandomUnitGenerator) {
    this.team = props.team;
  }
  public getUnit = (position: Array<number>): units => {
    return new units[Math.floor(Math.random() * 5)](this.team, position);
    //  return new PirateUnit(this.team, position);
  };
}
