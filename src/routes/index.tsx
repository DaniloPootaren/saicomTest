import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
    </Switch>
  );
};

export default Routes;
