import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import store, { persistor } from "@scores/state/store";
import { PersistGate } from "redux-persist/integration/react";
import { GAME_RESULT } from "@scores/types/enum/GameResult";
import { FixtureRow } from "./FixtureRow";

const customRender = (team) => {
  return render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FixtureRow {...team} />
      </PersistGate>
    </Provider>
  );
};

describe("FixtureRow component", () => {
  it("renders base component", async () => {
    const team = {
      name: "England",
      score: 0,
      result: GAME_RESULT.DRAW,
    };
    const { queryByTestId } = customRender(team);

    expect(queryByTestId("fixture-row")).toBeTruthy();
    expect(queryByTestId("name")).toHaveTextContent("England");
    expect(queryByTestId("score")).toHaveTextContent(0);

    expect(screen.toJSON()).toMatchSnapshot();
  });

  it("renders base win component", async () => {
    const team = {
      name: "Manchester United",
      score: 3,
      result: GAME_RESULT.WIN,
    };
    const { queryByTestId } = customRender(team);

    expect(queryByTestId("fixture-row")).toBeTruthy();
    expect(queryByTestId("name")).toHaveTextContent("Manchester United");
    expect(queryByTestId("score")).toHaveTextContent(3);

    expect(screen.toJSON()).toMatchSnapshot();
  });
});
