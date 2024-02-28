import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Provider } from "./context/Provider";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
