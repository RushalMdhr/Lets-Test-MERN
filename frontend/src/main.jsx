import ReactDOM from "react-dom/client"
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createRoutesFromElements } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Objects from "./components/Objects";
import CreateWithForm from "./components/CreateWithForm.jsx"
import { Provider } from "react-redux";
import store from "./redux/store.js"
import PaymentComponent from "./components/Payment.jsx"
import Success from "./components/Success.jsx"
import Failure from "./components/Failure.jsx"
import AdminLogin from "./components/AdminLogin.jsx"
import Login from "./components/Login.jsx"
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path='/' element={<App />} /> */}
      <Route path='/objects' element={<Objects />} />
      <Route path='/create' element={<CreateWithForm />} />
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/payment" element={<PaymentComponent />} />
      <Route path="/payment-success" element={<Success />} />
      <Route path="/payment-failure" element={<Failure />} />
      <Route path="/login" element={<Login/>} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
