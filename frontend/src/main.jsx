import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Calc from "./Components/Home/Calc.jsx";
import StoreTest from "./Components/StoreTest.jsx";
import StoreTest2 from "./Components/StoreTest2.jsx";
import { HelmetProvider } from "react-helmet-async";
import EmployeeProfile from "./Components/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/cal" element={<Calc />} />
      <Route path="/store" element={<StoreTest />} />
      <Route path="/store2" element={<StoreTest2 />} />
      <Route path="/profile" element={<EmployeeProfile />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HelmetProvider>
);
