// import "@testing-library/jest-dom"; // non-native library
// import "@testing-library/jest-native";
import "@testing-library/jest-native/extend-expect";
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('redux-persist/integration/react', () => ({ PersistGate: (props: any) => props.children, }));

// @TODO: figure strategy for web/app testing
//  Initial idea - test Platform usages individually, but when testing
//  app we can just use "web"
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'web',
  select: () => null
}));

jest.mock('next/router', () => ({
  push: jest.fn(),
  back: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  useRouter: () => ({
    push: jest.fn(),
  }),
}));
