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
  private isAttackTarget: boolean;
  private isHealTarget: boolean;
  private isParalyzeTarget: boolean;
  private team: string;
  private image: string;

  constructor(
    team: string,
    id: string,
    type: string,
    name: string,
    currentHp: number,
    maxHp: number,
    damage: number,
    initiative: number,
    isParalyzed: boolean,
    isDead: boolean,
    isAttackTarget: boolean,
    isHealTarget: boolean,
    isParalyzeTarget: boolean,
    image: string
  ) {
    this.team = team;
    this.id = id;
    this.type = type;
    this.name = name;
    this.currentHp = currentHp;
    this.maxHp = maxHp;
    this.damage = damage;
    this.initiative = initiative;
    this.isParalyzed = isParalyzed;
    this.isDead = isDead;
    this.isAttackTarget = isAttackTarget;
    this.isHealTarget = isHealTarget;
    this.isParalyzeTarget = isParalyzeTarget;
    this.image = image;
  }

  public getType = (): string => {
    return this.type;
  };

  public getId = (): string => {
    return this.id;
  };

  public getName = (): string => {
    return this.name;
  };

  public getCurrentHp = (): number => {
    return this.currentHp;
  };

  public setCurrentHp = (currentHp: number) => {
    this.currentHp = currentHp;
    this.currentHp <= 0 ? this.setIsDead(true) : null;
  };

  public applyDamage = (damage: number) => {
    this.currentHp -= damage;
    this.currentHp <= 0 ? this.setIsDead(true) : null;
  };

  public getMaxHp = (): number => {
    return this.maxHp;
  };

  public getDamage = (): number => {
    return this.damage;
  };

  public getInitiative = (): number => {
    return this.initiative;
  };

  public getIsParalyzed = (): boolean => {
    return this.isParalyzed;
  };

  public getIsDead = (): boolean => {
    return this.isDead;
  };

  public setIsDead = (isDead: boolean) => {
    this.isDead = isDead;
    this.currentHp = 0;
    this.isDead ? this.setIsParalyzed(false) : null;
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

  public getImage = (): string => {
    return this.image;
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
  archer = "https://1.downloader.disk.yandex.by/preview/5c76e5777feae1852e35d94ee03c47e9db9e14545792d92e67aac4fcf353d441/inf/bZbEg5IqVnb6VLtb3zZJtdpaxEg0g6ufCdCQJw4owZ8BNAhBZTkG66z0URtl50OB2GhTM21SGPpnJzjZshPwSg%3D%3D?uid=1130000014892791&filename=Archer.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  bomber = "https://4.downloader.disk.yandex.by/preview/b313e87bfa5d55809b98dcebe1a7bb0ed522b6fc1e45832074df444c0afc75aa/inf/8VYWCTpLNoPPo7mDtta83dpaxEg0g6ufCdCQJw4owZ-QOsZ8M7FhBK5XUWyk5mQdHeenn-8p1vKxhCDjGiKZnw%3D%3D?uid=1130000014892791&filename=Bomber.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  gunner = "https://4.downloader.disk.yandex.by/preview/da4372052bee7309251a2d80955bc047f0e192da2eaa9d75aa593101d537bda8/inf/GaeSbR_VydpZJm_XYQBILdpaxEg0g6ufCdCQJw4owZ_7wEIIBWVEsqc2bvk8ukIjIL8kyGs7R7mU31uX97ycOg%3D%3D?uid=1130000014892791&filename=Gunner.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  musketeer = "https://4.downloader.disk.yandex.by/preview/e7276881866cb09dc368340a7ab3d6750a5e33e30f14410297f39da1d632a68b/inf/gsWky2X6meGUebPNgPZQ9Jbmxgh7z9Sh2921M5W_Ksn0PvOovAv2teLpEXxexscjrvTAjjGFUGfa8x89XQXl1g%3D%3D?uid=1130000014892791&filename=Musketeer.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  pirate = "https://4.downloader.disk.yandex.by/preview/ab4f90e33257edcef23654187f299c839b0e345abad56929b7f6549208e90ec2/inf/Q0vtLXxLT_Tm7psCCh_WYpbmxgh7z9Sh2921M5W_Ksn-kY1fFlZffC1YYrIjS-ox9lgtm_QilgqVam1_TRD9Fg%3D%3D?uid=1130000014892791&filename=Pirate.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  sworder = "https://4.downloader.disk.yandex.by/preview/c3a32ee1c1324c97f18e34d582d07582891aef5bbc78e830a063a4f2eb203954/inf/B4qjUI-low-slv5jvhs62pbmxgh7z9Sh2921M5W_KsmkNEhEw2OCdgQJdB8KIAAo9Twmm-zSY4pxiZ6Iu69G-Q%3D%3D?uid=1130000014892791&filename=Sworder.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  doggy = "https://2.downloader.disk.yandex.by/preview/b8a9223a5c2a1dff072a81d8e62993cdd367d1d6945ec4c80f8a6ae2dfb919dd/inf/s3TMVkL0HWQGARabrbJ0Y9paxEg0g6ufCdCQJw4owZ8wphG7CHl2i3NxfXRElMLmxwVDI0BrwtSzaVZDJHjclw%3D%3D?uid=1130000014892791&filename=Doggy.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  mage = "https://2.downloader.disk.yandex.by/preview/b3426386ef6aadbfbb2a2f6204c96283a479243400a0a3392d44c852990fffb6/inf/UkvRzvceM4VvSEtek4rudbpR6UbzFj7oAJKvL4klRYid8iTKvRRbTNbYC4B_z15u74VlK8fWbsBhe6yjVgQZaw%3D%3D?uid=1130000014892791&filename=Mage.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
  priest = "https://4.downloader.disk.yandex.by/preview/ca42b60df85cbc620f029e8805f5055de71b02eed02360516b5329c078e5aafd/inf/E9sNI5Ei1E3rXvolHQ3wjZbmxgh7z9Sh2921M5W_KskI42JTt--GV28H51sb2cknf9NQIkZtruBStmQGVxzOYg%3D%3D?uid=1130000014892791&filename=Priest.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1130000014892791&tknv=v2&size=2880x1642",
}
