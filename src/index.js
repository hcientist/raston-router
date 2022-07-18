import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Output from "./routes/output";
import Input from "./routes/input";

import "./index.css";
import store from "./store";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/raston-router">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="output" element={<Output />} />
            <Route path="input" element={<Input />} />
            <Route path="input" element={<Input />} />
            {/* do you want it to have the <App /> component rendered too? use the one just below instead of the one currently enabled */}
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
