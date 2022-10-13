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

describe("index page", () => {
  it("renders base Index", () => {
    customRender();

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("Index renders expected panels", () => {
    const { queryByTestId } = customRender();

    const footballPanel = queryByTestId("football-panel");
    const cricketPanel = queryByTestId("cricket-panel");

    waitFor(() => {
      expect(footballPanel).toBeInTheDocument();
      expect(cricketPanel).toBeInTheDocument();
    });

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
