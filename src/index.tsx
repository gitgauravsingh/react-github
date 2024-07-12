import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./component/redux/Store";
import Apidata from "./component/redux/ApiData";
import Header from "./component/Header";
import { RouterProvider } from "react-router-dom";
import router from "./component/Router";
import Footer from "./component/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
      <Footer />
      {/* <Apidata /> */}
    </Provider>
  </React.StrictMode>
);
