import { useEffect } from "react";

import Routes from "./routes";
import { watchHttpResponses } from "./utils/http";

const App = () => {
  useEffect(watchHttpResponses, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default App;
