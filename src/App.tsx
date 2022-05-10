import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import { watchHttpResponses } from "./utils/http";

const App = () => {
  useEffect(watchHttpResponses, []);

  return (
    <div className="App">
      <Routes />
      <ToastContainer limit={1} />
    </div>
  );
};

export default App;
