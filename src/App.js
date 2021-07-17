import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./styles.css";

export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
