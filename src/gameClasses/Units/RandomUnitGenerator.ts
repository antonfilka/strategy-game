import ArcherUnit from "./ArcherUnit";
import BomberUnit from "./BomberUnit";
import DoggyUnit from "./DoggyUnit";
import GunnerUnit from "./GunnerUnit";
import MageUnit from "./MageUnit";
import MusketeerUnit from "./MusketeerUnit";
import PirateUnit from "./PirateUnit";
import PriestUnit from "./PriestUnit";
import SworderUnit from "./SworderUnit";

type units =
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
  private unit: units;

  constructor() {
    this.unit = new units[Math.floor(Math.random() * 9)]();
  }

  getUnit(): units {
    return this.unit;
  }
}
