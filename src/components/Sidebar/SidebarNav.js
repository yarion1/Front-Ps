import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import "react-pro-sidebar/dist/css/styles.css";
import "../../assets/styles/Sidebar/StyledSidebarNav.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const navigate = useNavigate();
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  function handleClickHome() {
    navigate("/");
  }
  function handleClickRent() {
    navigate("/Rent");
  }
  function handleClickAdverts() {
    navigate("/Adverts");
  }
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem onClick={handleClickHome} icon={<FiHome />}>
                Home
              </MenuItem>
              <MenuItem onClick={handleClickRent} icon={<FaList />}>
                Aluguéis
              </MenuItem>
              <MenuItem onClick={handleClickAdverts} icon={<FaRegHeart />}>
                Anúncios
              </MenuItem>
              <MenuItem active={true} icon={<RiPencilLine />}>
                Perfil
              </MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Header;
