import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./components/Main";
import Profile from "./components/userProfile/Profile";

const root = document.getElementById("root");
const load = () =>
  render(
    <AppContainer>
      <Router>
        <App />
      </Router>
    </AppContainer>,
    root
  );

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept("./App", load);
}

load();
