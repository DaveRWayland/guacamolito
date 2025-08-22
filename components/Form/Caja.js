import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { InputNumber } from "primereact/inputnumber";

const Caja = () => {
	const [isSpecific, setIsSpecific] = useState(false);
	const [normalCaja, setNormalCaja] = useState({ billetes: 0, monedas: 0 });
	const [specificCaja, setSpecificCaja] = useState({
		b500: 0,
		b200: 0,
		b100: 0,
		b50: 0,
		b20: 0,
		monedas: 0,
	});

	const handleNormalChange = (type, value) => {
		setNormalCaja((prev) => ({ ...prev, [type]: value }));
	};

	const handleSpecificChange = (type, value) => {
		setSpecificCaja((prev) => ({ ...prev, [type]: value }));
	};

	return (
		<div className='caja-container'>
			<div className='caja-switch'>
				<label htmlFor='caja-mode'>Desglose</label>
				<InputSwitch checked={isSpecific} onChange={(e) => setIsSpecific(e.value)} />
			</div>

			{!isSpecific ? (
				<div className='caja-normal'>
					<h3>Efectivo</h3>
					<div className='input-group'>
						<label htmlFor='billetes'>Billetes</label>
						<InputNumber
							id='billetes'
							value={normalCaja.billetes}
							onValueChange={(e) => handleNormalChange("billetes", e.value)}
							mode='currency'
							currency='MXN'
							locale='es-MX'
						/>
					</div>
					<div className='input-group'>
						<label htmlFor='monedas'>Monedas</label>
						<InputNumber
							id='monedas'
							value={normalCaja.monedas}
							onValueChange={(e) => handleNormalChange("monedas", e.value)}
							mode='currency'
							currency='MXN'
							locale='es-MX'
						/>
					</div>
				</div>
			) : (
				<div className='caja-specific'>
					<h3>Efectivo Desglosado</h3>
					{["b500", "b200", "b100", "b50", "b20"].map((bill) => (
						<div key={bill} className='input-group'>
							<label htmlFor={bill}>{`Billetes de ${bill.slice(1)}`}</label>
							<InputNumber id={bill} value={specificCaja[bill]} onValueChange={(e) => handleSpecificChange(bill, e.value)} />
						</div>
					))}
					<div className='input-group'>
						<label htmlFor='specific-monedas'>Monedas</label>
						<InputNumber
							id='specific-monedas'
							value={specificCaja.monedas}
							onValueChange={(e) => handleSpecificChange("monedas", e.value)}
							mode='currency'
							currency='MXN'
							locale='es-MX'
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Caja;
