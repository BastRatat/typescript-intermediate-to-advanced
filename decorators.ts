import { User } from "types";

const IS_PRESIDENT = true;

function OnlyPresident(value: User) {
  return function (
    target: Object, // CLASS TARGET
    key: string | symbol, // METHOD DECORATED
    descriptor: PropertyDescriptor // DECORATOR PARAMETER
  ) {
    const childFunction = descriptor.value;
    descriptor.value = (...args: any[]) => {
      if (IS_PRESIDENT) {
        return childFunction.apply(this, args);
      } else {
        throw new Error(`Only president can deocorate ${String(key)}`);
      }
    };
    return descriptor;
  };
}

class NuclearRocketLauncher {
  @OnlyPresident({ name: "Emmanuel Macron", age: 51 })
  attackCountry(country: string) {
    console.log("Rocket is now leaving the John Kennedy Space center!");
  }

  cleanStorageRoom() {
    console.log('Clean storage room in process')
  }
}

const nuclearRocketLauncher = new NuclearRocketLauncher()

// TO SUM-UP
// - can be used to avoid duplicate code in various classes
// - still experimental although used in many frameworks
// - you can pass generic to decorator as well
// - class and methods can be decorated
