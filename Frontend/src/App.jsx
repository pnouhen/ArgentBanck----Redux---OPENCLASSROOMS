import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/page/Index";
import SignIn from "./components/page/SignIn";
import User from "./components/page/User";

import "./assets/style/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
