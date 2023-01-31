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

async function injectMockOrRealData<Fn extends AnyFunction>(
  fn: Fn,
  getMockCallback: AnyAsyncFunction,
  getDatabaseCallBack: AnyAsyncFunction
) {
  return async (...args: Parameters<Fn>): Promise<ReturnType<Fn>> => {
    const dataToInject = ENV === environments.TEST ? await getMockCallback() : getDatabaseCallBack()
    const newFunction = await fn(...args, dataToInject);
    return newFunction;
  };
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
      name: "Antoine",
      age: 32,
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
  const higherOrderFunction = await injectMockOrRealData(
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
