import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './store/store'; 

import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

import "./style/main.css";

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
  return (
    <Provider store={store}>  {/* Passage du store au Provider */}
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
