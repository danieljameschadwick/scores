import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store, { persistor } from "@scores/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { FootballPanel } from "./FootballPanel";

const customRender = () => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FootballPanel />
      </PersistGate>
    </Provider>
  );
};

describe("FootballPanel component", () => {
  it("renders base loading component", async () => {
    const { queryByTestId } = customRender();

    expect(queryByTestId("loading")).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();

    await waitFor(() => expect(queryByTestId("fixtures")).not.toBeNull());

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
