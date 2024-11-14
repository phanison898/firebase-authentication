"use client";
import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider = (props: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
