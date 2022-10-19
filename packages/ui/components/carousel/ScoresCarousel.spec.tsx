import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store, { persistor } from "@scores/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { ScoresCarousel } from "./ScoresCarousel";

const customRender = () => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScoresCarousel />
      </PersistGate>
    </Provider>
  );
};

describe("ScoresCarousel component", () => {
  it("renders base loading component", async () => {
    const { queryByTestId } = customRender();

    expect(queryByTestId("carousel-loader")).toBeTruthy();
    expect(screen.toJSON()).toMatchSnapshot();

    await waitFor(() => expect(queryByTestId("carousel-scroll-wrapper")).not.toBeNull());

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
