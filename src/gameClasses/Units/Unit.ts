export default class Unit {
  team: string;
  position: Array<number>;
  id: string = "";
  type: string = "";
  name: string = "";
  maxHp: number = 10;
  currentHp: number = this.maxHp;
  damage: number = 10;
  initiative: number = 10;
  isParalyzed: boolean = false;
  isDead: boolean = false;
  isAttackTarget: boolean = false;
  isHealTarget: boolean = false;
  isParalyzeTarget: boolean = false;
  isDefending: boolean = false;
  isOnHover: boolean = false;
  image: string = "";
  hasCompletedTheTurn: boolean = false;
  isCurrentUnit: boolean = false;

  constructor(team: string, position: Array<number>) {
    this.team = team;
    this.position = position;
  }

  public getType = (): string => {
    return this.type;
  };

  public setType = (type: string): void => {
    this.type = type;
  };

  public getId = (): string => {
    return this.id;
  };

  public setId = (id: string): void => {
    this.id = id;
  };

  public getName = (): string => {
    return this.name;
  };

  public setName = (name: string): void => {
    this.name = name;
  };

  public getCurrentHp = (): number => {
    return this.currentHp;
  };

  public setCurrentHp = (currentHp: number) => {
    this.currentHp = currentHp;
  };

  public getMaxHp = (): number => {
    return this.maxHp;
  };

  public setMaxHp = (maxHp: number): void => {
    this.maxHp = maxHp;
  };

  public getDamage = (): number => {
    return this.damage;
  };

  public setDamage = (damage: number): void => {
    this.damage = damage;
  };

  public getInitiative = (): number => {
    return this.initiative;
  };

  public setInitiative = (initiative: number): void => {
    this.initiative = initiative;
  };

  public getIsParalyzed = (): boolean => {
    return this.isParalyzed;
  };

  public getIsDead = (): boolean => {
    return this.isDead;
  };

  public setIsDead = (isDead: boolean) => {
    this.isDead = isDead;
  };

  public setIsParalyzed = (isParalyzed: boolean) => {
    this.isParalyzed = isParalyzed;
  };

  getIsAttackTarget = (): boolean => {
    return this.isAttackTarget;
  };

  setIsAttackTarget = (isAttackTarget: boolean) => {
    this.isAttackTarget = isAttackTarget;
  };

  getIsHealTarget = (): boolean => {
    return this.isHealTarget;
  };

  setIsHealTarget = (isHealTarget: boolean) => {
    this.isHealTarget = isHealTarget;
  };

  getIsParalyzeTarget = (): boolean => {
    return this.isParalyzeTarget;
  };

  setIsParalyzeTarget = (isParalyzeTarget: boolean) => {
    this.isParalyzeTarget = isParalyzeTarget;
  };

  public getTeam = () => {
    return this.team;
  };

  public setTeam = (team: string) => {
    this.team = team;
  };

  public getIsDefending = () => {
    return this.isDefending;
  };

  public setIsDefending = (isDefending: boolean) => {
    this.isDefending = isDefending;
  };

  public getIsOnHover = () => {
    return this.isOnHover;
  };

  public setIsOnHover = (isOnHover: boolean) => {
    this.isOnHover = isOnHover;
  };

  public getPosition = () => {
    return this.position;
  };

  public setPosition = (position: Array<number>) => {
    this.position = position;
  };

  public getHasCompletedTheTurn = (): boolean => {
    return this.hasCompletedTheTurn;
  };

  public setHasCompletedTheTurn = (hasCompletedTheTurn: boolean): void => {
    this.hasCompletedTheTurn = hasCompletedTheTurn;
  };

  public getImage = (): string => {
    return this.image;
  };

  public setImage = (image: string): void => {
    this.image = image;
  };

  public getIsCurrentUnit = (): boolean => {
    return this.isCurrentUnit;
  };

  public setIsCurrentUnit = (isCurrentUnit: boolean) => {
    this.isCurrentUnit = isCurrentUnit;
  };
}

export enum teams {
  teamA = "A",
  teamB = "B",
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
  archer = "https://i.ibb.co/PrXtrt5/Archer.png",
  bomber = "https://i.ibb.co/HVFckcJ/Bomber.png",
  gunner = "https://i.ibb.co/JRhnnpM/Gunner.png",
  musketeer = "https://i.ibb.co/wz79P8h/Musketeer.png",
  pirate = "https://i.ibb.co/HD4qCMB/Pirate.png",
  sworder = "https://i.ibb.co/pw4Bm17/Sworder.png",
  doggy = "https://i.ibb.co/K2cRSFw/Doggy.png",
  mage = "https://i.ibb.co/C2476ZM/Mage.png",
  priest = "https://i.ibb.co/0hbJ2ZF/Priest.png",
}
