/**
 * Dependencies
 */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
/**
 * Components
 */
import Results from "pages/Results";
import Property from "pages/Property"
import Layout from "components/Layout";

function App() {
  const appData = useSelector((state) => state.getAppData.data) || [];
  if (appData.length) {
    return (
      <Layout>
        <Switch>
          <Redirect exact path={"/"} to="/results/1" />
          <Route exact path={"/results/:pageId"} component={Results} />
          <Route exact path={"/property/:propertyId"} component={Property} />
        </Switch>
      </Layout>
    );
  }

  return null;
}

export default App;
