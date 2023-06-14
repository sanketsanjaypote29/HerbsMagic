import "./Navbar.css";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="logo">
            <img src="logo.jpg" className="logo"></img>
         </div>
         <nav className="nav">
            <ul className="links">
               <li>
                  <a href="">Inventory</a>
               </li>
               <li>
                  <a href="">Shopping</a>
               </li>
               <li>
                  <a href="">Dashboard</a>
               </li>
            </ul>
         </nav>
         <div className="account">
            {/* <FaUser /> */}
            <img src="/user.png" alt="" />

            <a href="">Account</a>
         </div>
      </div>
   );
};

export default Navbar;
