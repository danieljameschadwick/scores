import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store, { persistor } from "@scores/state/store";
import { PersistGate } from "redux-persist/integration/react";
import Index from "../../src/pages/index";

const customRender = () => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Index />
      </PersistGate>
    </Provider>
  );
};

describe("Index page", () => {
  it("Index renders base", async () => {
    const { queryByTestId } = customRender();

    expect(queryByTestId("carousel-loader")).not.toBeNull();

    await waitFor(() => expect(queryByTestId("carousel-scroll-wrapper")).not.toBeNull());
    await waitFor(() => expect(queryByTestId("football-panel")).not.toBeNull());
    await waitFor(() => expect(queryByTestId("fixtures")).not.toBeNull());
    await waitFor(() => expect(queryByTestId("cricket-panel")).not.toBeNull());

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
