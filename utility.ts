import type { User } from "types";
import { generatePaginatedResponse } from "generics";

type PartialUser = Partial<User>;
type RequiredUser = Required<PartialUser>;
type RecordUser = Record<keyof User, any>;
type ReadonlyUser = Readonly<User>;
type UserNameByPicking = Pick<User, "name">;
type UserNameByOmitting = Omit<User, "age">;

type Client = User & { client: true; practitionner: false };
type Practitioner = User & {
  practitionner: true;
  client: false;
  hasSpecialRights: true;
};
type ClientOrPractioner = Client | Practitioner;
type ClientFromExtraction = Extract<ClientOrPractioner, Client>;
type PractionnerFromExclusion = Exclude<ClientOrPractioner, Client>;

type NonNullableUnion = NonNullable<User["age"] | User["name"] | undefined>;
type GeneratedPaginatedResponseReturnType = ReturnType<
  typeof generatePaginatedResponse
>;
type GeneratedPaginatedResponseParametersType = Parameters<
  typeof generatePaginatedResponse<User>
>;

type CapitalizeUserName = Capitalize<User["name"]>;

export type {
  PartialUser,
  RequiredUser,
  RecordUser,
  ReadonlyUser,
  UserNameByPicking,
  UserNameByOmitting,
  ClientFromExtraction,
  PractionnerFromExclusion,
  NonNullableUnion,
  GeneratedPaginatedResponseReturnType,
  GeneratedPaginatedResponseParametersType,
  CapitalizeUserName,
  Practitioner,
  Client,
};

// TO SUM-UP
// - if an object is deep, you have to apply those utility types recursively
// - many utility types available
// - Record is useful only when we don't know much about the values
// - Extract or Exclude only apply to unions
// - use more Readonly in your code to make your objects explicit

