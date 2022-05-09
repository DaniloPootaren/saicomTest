import { Routes as Switch, Route } from "react-router-dom";
import Create from "../pages/create";
import View from "../pages/view";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Create />} />
      <Route path="/view" element={<View />} />
    </Switch>
  );
};

export default Routes;
