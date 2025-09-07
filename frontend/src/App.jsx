import { Link, Outlet } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const showMessage = async () => {
    console.log('fetching')
    const res = await fetch("http://localhost:5000/test/message")
    console.log('fetched')
    if (res.ok) {
      console.log('response ok')
    }
    const data = await res.text()
    toast.success(data)
    console.log('data received')
  }
  return (
    <>
      <ToastContainer />
      <h1>noice</h1>
      <button
        className="btn bg-cyan-100 text-cyan-600 m-3 p-2 rounded-2xl border-2 border-cyan-600 hover:bg-cyan-200"
        onClick={showMessage}
      >
        Click For Backend Message
      </button>
      <a href="/login">
        <button
          className="btn bg-cyan-100 text-cyan-600 m-3 p-2 rounded-2xl border-2 border-cyan-600 hover:bg-cyan-200"
        >
          Login
        </button>
      </a>
      <a href="/admin">
        <button
          className="btn bg-cyan-100 text-cyan-600 m-3 p-2 rounded-2xl border-2 border-cyan-600 hover:bg-cyan-200"
        >
          Admin Login
        </button>
      </a>
        <main className="py-3">
          <Outlet />
        </main>
      </>
      );
}

      export default App;
