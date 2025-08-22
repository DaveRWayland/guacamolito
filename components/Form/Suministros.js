import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const Suministros = () => {
	const [suministros, setSuministros] = useState({
		harina: ["", ""],
		masa: ["", ""],
	});

	const handleChange = (name, index, value) => {
		setSuministros((prev) => {
			const updated = [...prev[name]];
			updated[index] = value;
			return { ...prev, [name]: updated };
		});
	};

	const handleAddProvision = () => {
		setSuministros((prev) => ({
			harina: [...prev.harina, "", ""],
			masa: [...prev.masa, "", ""],
		}));
	};

	return (
		<div className='suministros-container'>
			<div className='suministros-content'>
				<div className='suministros-grid '>
					<div className='suministros-column'>
						<h3 className='column-title'>HARINA</h3>
						{suministros.harina.map((val, index) => (
							<div key={index} className='suministros-input-group'>
								<InputText type='number' value={val} onChange={(e) => handleChange("harina", index, e.target.value)} className='suministros-input' />
								{index % 2 === 0 && <div className='input-separator'></div>}
							</div>
						))}
					</div>
					<div className='suministros-column'>
						<h3 className='column-title'>MASA</h3>
						{suministros.masa.map((val, index) => (
							<div key={index} className='suministros-input-group'>
								<InputText type='number' value={val} onChange={(e) => handleChange("masa", index, e.target.value)} className='suministros-input' />
								{index % 2 === 0 && <div className='input-separator'></div>}
							</div>
						))}
					</div>
				</div>
				<div className='suministros-footer'>
					<Button label='+ Agregar' onClick={handleAddProvision} className='p-button-warning' />
				</div>
			</div>
		</div>
	);
};

export default Suministros;
