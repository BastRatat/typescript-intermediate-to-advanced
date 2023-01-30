interface AnimalRefactoredInterface {
  getAnimalInformation: () => string
}

class AnimalRefactored implements AnimalRefactoredInterface {
  constructor(
    private readonly _type: string,
    public readonly speed: "slow" | "fast" | "average"
  ) {}

  get type() {
    return this._type
  }

  public getAnimalInformation() {
    return `your animal is ${this._type} and its speed is known to be ${this.speed}`
  }
}

const lion = new AnimalRefactored("mammal", "average");

// TO SUM-UP
// - you can directly declare properties in constructor arguments list
// - classes implement interfaces to describe what can be done on an object
// - respect the interface segregation principle
// - private/protected properties require a getter to be read outside of the class
