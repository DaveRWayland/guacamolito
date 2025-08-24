import { faAppleAlt, faBoxOpen, faFile, faGear, faHome, faMagnifyingGlass, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";

const NavSideBar = () => {
	return (
		<div id='sidebar' className='sidebar-container'>
			<Sidebar collapsed className='sidebar-component'>
				<Menu className='sidebar-menu'>
					<MenuItem icon={<FontAwesomeIcon icon={faHome} />}>Home</MenuItem>
					<MenuItem icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}>Consultar</MenuItem>
					<MenuItem icon={<FontAwesomeIcon icon={faFile} />}>Registrar</MenuItem>
					<MenuItem icon={<FontAwesomeIcon icon={faBoxOpen} />}>Inventario</MenuItem>
					<MenuItem icon={<FontAwesomeIcon icon={faAppleAlt} />}>Productos</MenuItem>
					<MenuItem icon={<FontAwesomeIcon icon={faGear} />}>Ajustes</MenuItem>
				</Menu>
			</Sidebar>
		</div>
	);
};

export default NavSideBar;
