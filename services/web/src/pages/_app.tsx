import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@scores/state/store";

import "@scores/translations/i18n";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>Scores</title>
        </Head>

        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
};

export default App;
