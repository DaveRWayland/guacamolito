import { faCircle, faFire, faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputNumber } from "primereact/inputnumber";
import React, { useState } from "react";
import "../../fontawsome";
import { Button } from "primereact/button";
import { handleNextStep } from "../../utils/handles.js";

const Ventas = () => {
	/* ----------- USE STATE ----------- */

	const [venta, setVenta] = useState({
		salsa: 0,
		sopes: 0,
		frijoles: 0,
		guacamole: 0,
		totopos: 0,
		jarochas: 0,
		masa: 0,
	});
	return (
		<>
			<div className='ventas-container'>
				<div className='ventas-form'>
					<label htmlFor='salsa' className='dflex gap-3'>
						<FontAwesomeIcon icon={faPepperHot} /> Salsa
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='salsa'
						value={venta.salsa}
						onValueChange={(e) => setVenta({ ...venta, salsa: e.value })}
					/>
					<label htmlFor='sopes' className='dflex gap-3'>
						<FontAwesomeIcon icon={faCircle} /> Sopes
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='sopes'
						value={venta.sopes}
						onValueChange={(e) => setVenta({ ...venta, sopes: e.value })}
					/>
					<label htmlFor='frijoles' className='dflex gap-3'>
						<FontAwesomeIcon icon={["fac", "coffee-bean"]} /> Frijoles
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='frijoles'
						value={venta.frijoles}
						onValueChange={(e) => setVenta({ ...venta, frijoles: e.value })}
					/>
					<label htmlFor='guacamole' className='dflex gap-3'>
						<FontAwesomeIcon icon={["fac", "avocado"]} /> Guacamole
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='guacamole'
						value={venta.guacamole}
						onValueChange={(e) => setVenta({ ...venta, guacamole: e.value })}
					/>
					<label htmlFor='totopos' className='dflex gap-3'>
						<FontAwesomeIcon icon={["fac", "TotopoIcon"]} />
						Totopos
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='totopos'
						value={venta.totopos}
						onValueChange={(e) => setVenta({ ...venta, totopos: e.value })}
					/>
					<label htmlFor='jarochas' className='dflex gap-3 '>
						<FontAwesomeIcon icon={faFire} />
						Jarochas
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='jarochas'
						value={venta.jarochas}
						onValueChange={(e) => setVenta({ ...venta, jarochas: e.value })}
					/>
					<label htmlFor='masa' className='dflex gap-3'>
						<FontAwesomeIcon icon={["fac", "CornIcon"]} />
						Masa
					</label>
					<InputNumber
						showButtons
						buttonLayout='horizontal'
						step={1}
						decrementButtonClassName='p-button'
						incrementButtonClassName='p-button'
						incrementButtonIcon='pi pi-plus'
						decrementButtonIcon='pi pi-minus'
						id='masa'
						value={venta.masa}
						onValueChange={(e) => setVenta({ ...venta, masa: e.value })}
					/>
				</div>
				<div className='button-next mt-5 w-100 flex justify-content-end'>
					<Button label='Siguiente' icon='pi pi-arrow-right' size='small' onClick={() => handleNextStep(3)} />
				</div>
			</div>
		</>
	);
};

export default Ventas;
