class LeagueOfLegendChampion {
  constructor(public readonly x: number = 0, public readonly y: number = 0) {}

  attack() {}

  back() {}
}

class Healable {
  heal() {}
}

class Tankable {
  tank() {}
}

interface LeagueOfLegendChampion extends Healable, Tankable {}

applyMixins(LeagueOfLegendChampion, [Healable, Tankable]);

function applyMixins(derivatedConstructor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivatedConstructor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

const player = new LeagueOfLegendChampion();

// TO SUM-UP
// - can be useful but it's a bit antipattern
// - add tremendous complexity in codebase
// - difficult to maintain
