import {useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoppingCardProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import './App.css'
import Navbar from '../../Components/Navbar'
import {CheckoutSideMenu}  from '../../Components/CheckoutSideMenu'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home /> },
    {path:'/my-account', element: <MyAccount /> },
    {path:'/my-order', element: <MyOrder /> },
    {path:'/my-orders/last', element: <MyOrder /> },
    {path:'/my-orders', element: <MyOrders /> },
    {path:'/sign-in', element: <SignIn /> },
    {path:'/*', element: <NotFound /> } //cuando no encuentre ningguna de las rutas (/*) entonces mostrar el NotFound
  ])
  return routes
}

function App() {
  return (
    <ShoppingCardProvider>
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
      <CheckoutSideMenu />
    </BrowserRouter> 
    </ShoppingCardProvider>
  )
}

export default App
