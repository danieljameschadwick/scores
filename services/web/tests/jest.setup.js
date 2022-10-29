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
