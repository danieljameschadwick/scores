import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store, { persistor } from "@scores/state/store";
import { PersistGate } from "redux-persist/integration/react";
import Index from "./index";

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
  it("renders base Index", async () => {
    const { queryByTestId } = customRender();

    const carouselScrollWrapper = queryByTestId("carousel-scroll-wrapper");

    // await waitFor(() => expect(carouselScrollWrapper).toBeTruthy());

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("Index renders expected panels", async () => {
    const { getByText } = customRender();

    waitFor(() => expect(getByText("Football Panel")).toBeInTheDocument());
    // await waitFor(() => expect(queryByTestId("carousel-scroll-wrapper")).toBeTruthy());
    // await waitFor(() => expect(queryByTestId("football-panel")).toBeTruthy());
    // await waitFor(() => expect(queryByTestId("cricket-panel")).toBeTruthy());

    // console.log(queryByTestId("football-panel"));

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
