import React from "react";

import { Provider } from "react-redux";

import { store } from "./store";

import MainComponent from "./MainComponent"; // Your main component
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <MainComponent />
      </PaperProvider>
    </Provider>
  );
}
