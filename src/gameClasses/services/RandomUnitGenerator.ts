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
  ArcherUnit,
  DoggyUnit,
  GunnerUnit,
  MageUnit,
  MusketeerUnit,
  BomberUnit,
  PirateUnit,
  PriestUnit,
  SworderUnit,
];

export default class RandomUnitGenerator {
  public static getUnit = (): units => {
    return new units[Math.floor(Math.random() * 9)]();
  };
}
