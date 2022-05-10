import { Routes as Switch, Route } from "react-router-dom";
import Not_Found_Page from "../pages/404";
import Create from "../pages/create";
import View from "../pages/view";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Create />} />
      <Route path="/view" element={<View />} />
      <Route path="*" element={<Not_Found_Page />} />
    </Switch>
  );
};

export default Routes;
