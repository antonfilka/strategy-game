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

const units = [
  PirateUnit,
  MageUnit,
  SworderUnit,
  ArcherUnit,
  GunnerUnit,
  DoggyUnit,
  BomberUnit,
  MusketeerUnit,
  PriestUnit,
];

export default class RandomUnitGenerator {
  public static getRandomUnit = (
    team: string,
    position: Array<number>
  ): units => {
    // 9 is used to get random value in range 0-8
    return new units[Math.floor(Math.random() * 9)](team, position);
  };
}
