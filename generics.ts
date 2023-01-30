import type { User } from "types";
import type { Expect, Equal } from "tests";

type PaginatedResponse<Entity extends object, Error = any> = {
  totalCount: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: Entity[];
  error?: Error;
};

const items: User[] = [
  {
    name: "Maria",
    age: 19,
  },
  {
    name: "Juanito",
    age: 18,
  },
];

function generatePaginatedResponse<Entity extends object>(
  items: Entity[]
): PaginatedResponse<Entity> {
  return {
    totalCount: items.length,
    hasNextPage: false,
    hasPreviousPage: false,
    data: items,
  };
}

const paginatedResponse = generatePaginatedResponse<User>(items);

type GenericTests = [
  Expect<
    Equal<
      PaginatedResponse<User>,
      ReturnType<typeof generatePaginatedResponse<User>>
    >
  >
];

export type { GenericTests }
export { generatePaginatedResponse }

// TO SUM-UP
// - works both on type & interface
// - a generic can take as many parameters as you want
// - add and should add constraints as much as you can
// - generic parameters can have a default type
