import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Gastos from "./Gastos";

const Navbar = () => {
	return (
		<div className='tabBar'>
			<TabView>
				<TabPanel header='Gastos' leftIcon='pi pi-wallet'>
					<Gastos />
				</TabPanel>
				<TabPanel header='Ventas' leftIcon='pi pi-shopping-cart'></TabPanel>
				<TabPanel header='Suministros' leftIcon='pi pi-box'></TabPanel>
				<TabPanel header='Caja' leftIcon='pi pi-dollar'></TabPanel>
			</TabView>
		</div>
	);
};

export default Navbar;
