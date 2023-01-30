import { User, AppNames } from "types";

interface PractitionersFactoryInterface {
  doAccountingThings: () => void
}

class PractitionersFactory implements PractitionersFactoryInterface {
  protected _accessToApps: Record<AppNames, boolean>;

  constructor(
    private readonly _name: User["name"],
    protected readonly _age: User["age"]
  ) {}

  public doAccountingThings() {
    console.log('I am doing accounting')
  }
}

interface UserFactoryInterface {
  doSomething: () => void;
}

class UserFactory extends PractitionersFactory implements UserFactoryInterface {
  constructor(_name: User["name"], _age: User["age"]) {
    super(_name, _age);
  }

  get age() {
    return this.age;
  }

  set accessToApps(accessToApp: Record<AppNames, boolean>) {
    this._accessToApps = accessToApp;
  }

  public doSomething(): void {
    console.log("I am doing something cool!");
  }

  private doPrivateThing(): void {
    console.log("Encapsulation is really cool!");
  }
}

const myUser = new UserFactory("Jane", 25);
myUser.accessToApps = { invoicing: true, dashboard: false, production: true };


// TO SUM-UP
// - classes can inherit from a single class
// - when a parent class requires parameters, they have to be passed into the super() method
// - you can use setters to edit a property
// - you cannot use setters on readonly properties
