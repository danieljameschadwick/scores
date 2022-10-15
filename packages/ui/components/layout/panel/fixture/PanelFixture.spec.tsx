import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store, { persistor } from "@scores/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { PanelFixture } from "./PanelFixture";

const customRender = (id, home = {}, away = {}) => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PanelFixture id={id} home={home} away={away} />
      </PersistGate>
    </Provider>
  );
};

describe("PanelFixture component", () => {
  it("renders base loading component", async () => {
    const { queryByTestId } = customRender(1234);

    expect(queryByTestId("panel-fixture")).toBeTruthy();
    expect(queryByTestId("fixture-row-home")).toBeTruthy();
    expect(queryByTestId("fixture-row-away")).toBeTruthy();

    expect(screen.toJSON()).toMatchSnapshot();
  });

  // it("on click we navigate to fixture", async () => {
  //   const home = {};
  //   const away = {};
  //   const { queryByTestId } = customRender();

  //   fireEvent.click(queryByTestId("panel-fixture"));

  //   expect // trigger for router
  // });
});
