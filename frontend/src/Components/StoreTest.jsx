// import { useDispatch, useSelector } from "react-redux";
// import { useLoginMutation } from "../redux/api/TestApiSlice";
// import { useState } from "react";
// import { loginUser } from "../redux/slices/authSlice";

const StoreTest = () => {
  // const [x, setX] = useState("");
  // const dispatch = useDispatch();
  // const [login, { isLoading }] = useLoginMutation();
  // const userInfo = useSelector((state) => state.auth?.userInfo);

  // const StoreIn = async () => {
  //   const data = { username: "rushal", password: "1234" };
  //   console.log("Sending:", data);

  //   try {
  //     const userDetails = await login(data).unwrap();
  //     console.log("API Response:", userDetails);

  //     // ✅ Save to Redux store
  //     dispatch(loginUser(userDetails));

  //     // ✅ Also set local state
  //     setX(JSON.stringify(userDetails));
  //     console.log("Checking Reduxt Store : ");
  //     if (userInfo) {
  //       console.log(userInfo);
  //     } else {
  //       console.log("No user info in Redux store yet"); 
  //     }
  //     console.log("Saved to Redux store");
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
    <>
      {/* <h1 className="text-red-600 m-5">Store Test</h1>
      
      <div className="bg-green-100 p-3 m-5">
        <h3>Redux Store Content:</h3>
        <pre>{JSON.stringify({ userInfo }, null, 2)}</pre>
      </div>

      <button onClick={StoreIn} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      
      <div>API Response: {x}</div> */}
    </>
  );
};

export default StoreTest;
