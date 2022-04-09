import { Link } from 'react-router-dom'
import logo from '../images/Logo (1).png'
import { FaBars } from 'react-icons/fa';
import { useRef } from 'react';

const Navbar = () => {
    const ul = useRef('')
    const navTog = useRef('')
    // console.log(ul)
    const handleMobNav = () => {
        let visible = ul.current.getAttribute("data-visible")
        if(visible === "false"){
            ul.current.setAttribute("data-visible", true)
            navTog.current.setAttribute("aria-expanded", true)
        }else {
            ul.current.setAttribute("data-visible", false)
            navTog.current.setAttribute("aria-expanded", false)
        }
    }
    return ( 
        <div className="">
           
            <nav className="d-flex">
                <div className="logo ">
                    <img src={logo} alt="logo"  width="60px"/>
                </div>
                <button onClick={handleMobNav} ref={navTog} className="mobile-nav-tog" aria-controls="navigation" aria-expanded="false">
                    {/* <img src={bar} alt="" width="0px"/> */}
                    <FaBars size="25px"/>
                </button>
                <ul ref={ul} id="navigation" data-visible="false" className="d-flex ">
                    <li><Link className="nav-links fw-bold" to="/">HOME</Link></li>
                    <li><Link className="nav-links fw-bold" to="/">COLLECTION</Link></li>
                    <li><Link className="nav-links fw-bold" to="/">BLOGS</Link></li>
                    {/* <li><Link className="nav-links fw-bold" to="/">SHOP</Link></li> */}
                </ul>
                <div className="user-acct flex">
                    <ul className="flex">
                        <li><Link className="nav-link-cus btn btn-outline-dark" to="/">User</Link></li>
                        <li><Link className="nav-link-cus btn btn-outline-success" to="/">Login</Link></li>
                        <li><Link className="nav-link-cus btn btn-outline-danger" to="/">Cart</Link></li>
                    </ul>
                </div>
                
            </nav>

        </div>
     );
}
 
export default Navbar;