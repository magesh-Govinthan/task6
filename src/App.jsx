
import { Route, Routes } from 'react-router-dom'

import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {

  return (
 <div>
 
 
 
 <Routes>
<Route path='/' element={<Navbar/>}>
<Route index element={<Home/>}/>
<Route path='cart' element={<Cart/>}/>
</Route>
 </Routes>

 </div>
  )
}

export default App
