import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Gastos from "./Gastos";
import Ventas from "./Ventas";
import Suministros from "./Suministros";
import Caja from "./Caja";

const Navbar = () => {
	return (
		<div className='tabBar'>
			<TabView>
				<TabPanel header='Gastos' leftIcon='pi pi-wallet'>
					<Gastos />
				</TabPanel>
				<TabPanel header='Ventas' leftIcon='pi pi-shopping-cart'>
					<Ventas />
				</TabPanel>
				<TabPanel header='Suministros' leftIcon='pi pi-box'>
					<Suministros />
				</TabPanel>
				<TabPanel header='Caja' leftIcon='pi pi-dollar'>
					<Caja />
				</TabPanel>
			</TabView>
		</div>
	);
};

export default Navbar;
