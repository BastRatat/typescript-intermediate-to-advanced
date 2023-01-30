type AnyFunction = (...args: any[]) => any;
type AnyAsyncFunction = (...args: any[]) => Promise<any>;

type Env = "test" | "local" | "dev" | "prod";

type DataType = {
  name: string;
  age: number;
};

const environments = {
  LOCAL: "local",
  TEST: "test",
  DEV: "dev",
  PREPROD: "preprod",
  PROD: "prod",
} as const;

const ENV: Env = "test";

async function injectMockOrRepositoryFour<Fn extends AnyFunction>(
  fn: Fn,
  getMockCallback: AnyAsyncFunction,
  getDatabaseCallBack: AnyAsyncFunction
) {
  if (ENV === environments.TEST) {
    const dataFromMock = await getMockCallback();
    return async (...args: Parameters<Fn>): Promise<ReturnType<Fn>> => {
      const val = await fn(...args, dataFromMock);
      return val;
    };
  } else {
    const dataFromDatabase = await getDatabaseCallBack();
    return async (...args: Parameters<Fn>): Promise<ReturnType<Fn>> => {
      const val = await fn(...args, dataFromDatabase);
      return val;
    };
  }
}

const fakeRecordFromDatabase = async (): Promise<DataType> => {
  return new Promise<DataType>((resolve) => {
    resolve({
      name: "Bastien",
      age: 28,
    });
  });
};

const fakeRecordFromMock = async (): Promise<DataType> => {
  return new Promise<DataType>((resolve) => {
    resolve({
      name: "Bastien",
      age: 28,
    });
  });
};

function helloWorld<InjectedObjectType extends DataType>(
  myName: string,
  ...injectedArgs: InjectedObjectType[]
): string {
  const { age, name } = injectedArgs[0];
  return `Hello world. My name is ${myName}.\nSome data have been injected using the HoF pattern: ${JSON.stringify(
    { age, name }
  )}`;
}

const runHigherOrderFunction = async () => {
  const higherOrderFunction = await injectMockOrRepositoryFour(
    helloWorld,
    fakeRecordFromMock,
    fakeRecordFromDatabase
  );
  return higherOrderFunction("Juanito");
};

// TO SUM-UP
// - good alternatives to decorators
// - allow to avoid mixing test and production codebase
// - cannot have a higher order function that both handles asynchronous and synchronous operations
// - perfectly applies to functional programming
