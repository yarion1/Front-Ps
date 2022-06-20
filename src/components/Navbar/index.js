import React, {useState} from "react";
import '../../assets/styles/Navbar/stylednavbar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/img/logo.svg'
import logout  from "../../store/logout";
import { useDispatch, useSelector } from "react-redux";

const NavbarPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { isAuthenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

  function authLogout() {
		isAuthenticated && dispatch(logout());
	}


  return (
    <>
            <nav className="navbar">
        <div className="nav-container">
            <div  className="nav-logo">
              <Link  to="/"><img style={{width:'120px', height:"120px"}} src={logo}/></Link>
            </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
             
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
       
                to="/Rent"
                className="nav-links"
               
              >
                Meus Alugueis
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
              
                to="/parceiros"
                className="nav-links"
                
              >
                Parceiros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/User-profile/*"
                className="nav-links"
               
              >
                Meu Perfil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/login"
                className="nav-links"
                onClick={authLogout}
              >
                Sair
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

    </>
  );
};

export default NavbarPage;
