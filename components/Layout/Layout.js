import React from "react";
import Customside from "./NavSideBar";

export default function Layout({ children }) {
	return (
		<>
			<div className='flex'>
				<Customside />
				<main>{children}</main>
			</div>
		</>
	);
}
