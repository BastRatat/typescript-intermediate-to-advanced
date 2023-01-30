type UserName = string;

type User = {
  name: UserName;
  age: number;
};

type AppNames = 'invoicing' | 'production' | 'dashboard'

type UserAddress = {
  city: string;
  zipCode: number;
};

type FullUser = User & UserAddress;

const user: User = {
  name: "Juanito",
  age: 18,
};

export { user }
export type { User, UserAddress, FullUser, AppNames };

// TO SUM-UP
// - can both type primitive values and objects
// - hinting when hovering the type
