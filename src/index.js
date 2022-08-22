import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// React Router
import { BrowserRouter } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import reduxthunk from "redux-thunk";
import movieReducer from "./store/reducers/movie";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rootReducer = combineReducers({
  movie: movieReducer,
});

const store = createStore(rootReducer, applyMiddleware(reduxthunk));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
