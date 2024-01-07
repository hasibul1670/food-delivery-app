import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CommonContainer } from "./Pages/Shared/CommonContainer";
import { router } from "./Routes/Routes";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <CommonContainer>
        <RouterProvider router={router} />
      </CommonContainer>
    </Provider>

    {/* </div> */}
  </React.StrictMode>
);
