// @flow
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import i18next from "i18next";

import configureApi from "./api";
import config from "./constants/config";
import store from "./store/index";
import AppRouter from "./Router";

configureApi(config.baseURL);

i18next.init({
  lng: "en",
  resources: require("./locales/en.json")
});

const root = document.getElementById("root");

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    root
  );
}
