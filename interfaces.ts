interface User {
  name: string
  age: number
}

interface User {
  gender: 'F' | 'M' | 'Other'
}

interface UserAddress {
  city: string
  zipCode: number
}

interface FullUser extends User, UserAddress {}

const user: FullUser = {
  name: 'Juanito',
  age: 18,
  city: 'Barcelona',
  zipCode: 08001,
  gender: 'M'
}

export { user }
export type { User, UserAddress, FullUser };

// TO SUM-UP
// - cannot type primitive values
// - can be amplified
// - no hinting when hovering the type
