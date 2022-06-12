import React, {useState} from "react";
import '../../assets/styles/Navbar/stylednavbar.css'
import { NavLink } from "react-router-dom";
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
          <NavLink exact to="/" className="nav-logo">
            <img style={{width:'120px', height:"120px"}} src={logo}/>
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Rent"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Meus Alugueis
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/parceiros"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Parceiros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/User-profile/*"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Meu Perfil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/logout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sair
              </NavLink>
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
