import React, { useState } from "react";
import "../../assets/styles/Navbar/stylednavbar.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import logo from '../../assets/img/logo.svg'
import { logoutAction } from "../../store/actions";
=======
import logo from "../../assets/img/logo.svg";
import logout from "../../store/logout";
>>>>>>> 309ba9e6bafcd2b51401a95f0f82d4f0f54be1ba
import { useDispatch, useSelector } from "react-redux";

const NavbarPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function authLogout() {
<<<<<<< HEAD
		 dispatch(logoutAction());
	}

=======
    isAuthenticated && dispatch(logout());
  }
>>>>>>> 309ba9e6bafcd2b51401a95f0f82d4f0f54be1ba

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="/">
              <img
                style={{ width: "120px", height: "120px" }}
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li></li>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link
       
                to="/Rent"
                className="nav-links"
               
              >
                Meus Anúncios
              </Link>
            </li>
            <li className="nav-item">
              <Link
       
                to="/MyRent"
                className="nav-links"
               
              >
                Meus Aluguéis
              </Link>
            </li>
            <li className="nav-item">
              <Link
       
                to="/alugados"
                className="nav-links"
               
              >
                Alugados
              </Link>
            </li>
            <li className="nav-item">
            <Link
                  
                  to="/equipamentos"
                  className="nav-links"
                  
                >
                  Anúncios
                </Link>
            </li>
            <li className="nav-item">
              <Link
              
                to="/Equipment_Register"
                className="nav-links"
                
              >
                Anunciar
=======
              <Link to="/Rent" className="nav-links">
                Meus Alugueis
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link to="/parceiros" className="nav-links">
                Parceiros
>>>>>>> 309ba9e6bafcd2b51401a95f0f82d4f0f54be1ba
              </Link>
            </li> */}
            <li className="nav-item">
              <Link exact to="/User-profile/*" className="nav-links">
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
