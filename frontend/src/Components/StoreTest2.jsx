import { useLoginMutation } from '../redux/api/TestApiSlice'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';
import { Helmet } from 'react-helmet-async';

const StoreTest2 = () => {
  const dispatch = useDispatch();
  const [login,{isLoading}]=useLoginMutation();
  const userInfo = useSelector(state => state.users)
  console.log('userInfo : ',userInfo)

  const DispatchInStore = async() => {
    const userDetails = await login({username : "rushal", password : "1234"}).unwrap();
    console.log(userDetails)
    dispatch(loginUser(userDetails))
  }
  return (
    <div>
      <Helmet>
        {/* set the specific set of header prpopertiesHelmetProvider */}
        <title>StoreTesting</title>
        <meta name='description' content='Shop our latest products now.' />
      </Helmet>
      <button
      className='bg-red-100 p-3 m-5 *:hover:bg-red-300 text-red-500 text-2xl font-bold border-red-500 border-2 rounded-2xl'
      onClick={DispatchInStore}>Login</button>
    </div>
  )
}

export default StoreTest2
