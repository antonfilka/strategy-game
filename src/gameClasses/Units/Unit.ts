export default class Unit {
  private id: string;
  private type: string;
  private name: string;
  private currentHp: number;
  private maxHp: number;
  private damage: number;
  private initiative: number;
  private isParalyzed: boolean;
  private isDead: boolean;
  private image: string;

  constructor(
    id: string,
    type: string,
    name: string,
    currentHp: number,
    maxHp: number,
    damage: number,
    initiative: number,
    isParalyzed: boolean,
    isDead: boolean,
    image: string
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.initiative = initiative;
    this.isParalyzed = isParalyzed;
    this.isDead = isDead;
    this.image = image;
  }

  getType(): string {
    return this.type;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getCurrentHp(): number {
    return this.currentHp;
  }

  setCurrentHp(currentHp: number) {
    this.currentHp = currentHp;
  }

  getMaxHp(): number {
    return this.maxHp;
  }

  getDamage(): number {
    return this.damage;
  }

  getInitiative(): number {
    return this.initiative;
  }

  getIsParalyzed(): boolean {
    return this.isParalyzed;
  }

  getIsDead(): boolean {
    return this.isDead;
  }

  setIsDead(isDead: boolean) {
    this.isDead = isDead;
  }

  setIsParalyzed(isParalyzed: boolean) {
    this.isParalyzed = isParalyzed;
  }
}

export enum unitsTypes {
  melee = "melee",
  range = "range",
  mage = "mage",
  healerSingle = "healerSingle",
  healerMass = "healerMass",
  paralyzer = "paralyzer",
}

export enum unitsImages {
  archer = "../../images/Archer.png",
  bomber = "../../images/Bomber.png",
  gunner = "../../images/Gunner.png",
  musketeer = "../../images/Musketeer.png",
  pirate = "../../images/Pirate.png",
  sworder = "../../images/Sworder.png",
  doggy = "../../images/Doggy.png",
  mage = "../../images/Mage.png",
  priest = "../../images/Priest.png",
}
