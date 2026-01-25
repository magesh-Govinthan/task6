import'./Navbar.css'
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart.jsx';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { BiCartAdd } from 'react-icons/bi';
import { CartContext } from '../Context/Cartcontext.jsx';

function Navbar(props) {
 const navigate=useNavigate();  
const {cartCount}=useContext(CartContext);
     const handlePage=()=>{
   navigate("cart")
   }
  return (
    <>
    <div className='Nav-parent'>
    <div className='Nav-containter'>
        <div className='nav-child1'>
      <h1><AiOutlineProduct/></h1>
      <h1>Products</h1>
      </div>
      <div className='nav-child2'>
        <input type='text' name='search' placeholder='Search'/>
        <button><FaSearch /></button>
      </div>
      <div className='navi'>
        <div className='nav-child4'>
        <h1 ><FaUserCircle /></h1>
      <h1 className="tit">Sign in</h1>
    <div className='nav-child3' onClick={handlePage}>
        <button>{cartCount}</button>
        <h1 ><BiCartAdd/></h1>
      <h1 className="tit">Cart</h1>
      </div>

      
      </div>
  
</div>
    </div>
    </div>
    <Outlet/>
    </>
  )
}


export default Navbar


