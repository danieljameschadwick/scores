import React from "react";
import {
  render,
  screen,
  act,
  waitFor,
  fireEvent,
} from "@testing-library/react-native";
import { Provider } from "react-redux";
import Router, { useRouter } from "next/router";
import store, { persistor } from "@scores/state/store";
import { FixtureContext } from "@scores/ui/state/FixtureContext";
import { PersistGate } from "redux-persist/integration/react";
import { CarouselScoreBox } from "./CarouselScoreBox";

const customRender = (fixture) => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FixtureContext.Provider value={fixture}>
          <CarouselScoreBox />
        </FixtureContext.Provider>
      </PersistGate>
    </Provider>
  );
};

describe("CarouselScoreBox component", () => {
  it("renders base component", async () => {
    const fixture = {};
    customRender(fixture);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("can navigate to fixture", async () => {
    const fixture = {
      id: 12345,
    };
    const { queryByTestId } = customRender(fixture);

    act(() => {
      fireEvent.press(queryByTestId("score-box"));
    });

    await waitFor(() => {
      expect(useRouter.push).toHaveBeenCalled();
    });

    expect(useRouter.push).toHaveBeenCalledWith("/fixture/12345");
    expect(useRouter.push).toHaveBeenCalledWith("/fixture/12345zzzzz");

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
