// the interfaces is just like the type in type script

interface IPerson {
  name: string;
  family: string;
}

class PersonOne implements IPerson {
  name: string;
  family: string;
  constructor(name: string, family: string) {
    this.name = name;
    this.family = family;
  }
}

class Animal {
  private name: string;
  protected color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
}
