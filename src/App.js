import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PersonalDetailsBrandsPage from "./pages/PersonalDetailsBrandsPage";
import SignupPage from "./pages/SignupPage";
import Grid from "./pages/Grid";
import GridEdit from "./pages/GridEditPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <PersonalDetailsBrandsPage />
          </Route>
          <Route exact path="/SignupPage">
            <SignupPage />
          </Route>
          <Route exact path="/Grid">
            <Grid />
          </Route>
          <Route exact path="/GridEdit">
            <GridEdit/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;