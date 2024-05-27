import {useRoutes, BrowserRouter} from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path:'/', element: <Home /> },
    {path:'/myAccount', element: <MyAccount /> },
    {path:'/myOrder', element: <MyOrder /> },
    {path:'/myOrders', element: <MyOrders /> },
    {path:'/signIn', element: <SignIn /> },
    {path:'/*', element: <NotFound /> } //cuando no encuentre ningguna de las rutas (/*) entonces mostrar el NotFound
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />

    </BrowserRouter> 

  )
}

export default App
