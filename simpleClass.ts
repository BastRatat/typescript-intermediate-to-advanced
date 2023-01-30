class Animal {
  public type: string 
  public speed: 'slow' | 'fast' | 'average'
  constructor(type: string, speed: 'slow' | 'fast' | 'average') {
    this.type = type
    this.speed = speed
  }
}

const turtle = new Animal('reptiles', 'slow')
const leopard = new Animal('mammal', 'fast')

// TO SUM-UP
// - public/private/protected keywords can help you leverage the encapsulation principle on properties
// - classes allow your code to have a single responsibility
