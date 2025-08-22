import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { handleNextStep } from "../../utils/handles";

const columns = [
	{ field: "element", header: "Gasto" },
	{ field: "amount", header: "Monto" },
];

const Gastos = () => {
	/* ----------- USE STATE ----------- */
	const [register, setRegister] = useState([]);
	const [inputText, setInputText] = useState("");
	const [inputAmount, setInputAmount] = useState(0);

	/* ------------ FUNTIONS ----------- */

	const inputType = (options) => {
		if (options.field === "amount") return amountEditor(options);
		return textEditor(options);
	};

	const onCellEditComplete = (e) => {
		let { rowData, newValue, field, originalEvent: event } = e;

		setInputText("");
		setInputAmount(0);
		document.querySelector("#InputText")?.focus();

		switch (field) {
			case "amount":
				rowData[field] = newValue;
				event.preventDefault();
				break;

			default:
				if (newValue.trim().length > 0) rowData[field] = newValue;
				else event.preventDefault();
				break;
		}
	};

	const currencyAmount = (rowData) => {
		return new Intl.NumberFormat("es-MX", {
			style: "currency",
			currency: "MXN",
		}).format(rowData.amount);
	};

	const amountEditor = (options) => {
		return (
			<div className='flex-auto'>
				<InputNumber
					inputId='stacked-buttons'
					value={options.value}
					onChange={(e) => options.editorCallback(e.value)}
					mode='currency'
					currency='MXN'
					locale='es-MX'
					showButtons
					onKeyDown={(e) => e.stopPropagation()}
				/>
			</div>
		);
	};

	const textEditor = (options) => {
		return (
			<div className='flex-auto'>
				<InputText
					type='text'
					value={options.value}
					onChange={(e) => options.editorCallback(e.target.value)}
					onKeyDown={(e) => e.stopPropagation()}
				/>
			</div>
		);
	};

	/* ------------- HANDLES ------------ */

	const handleAddRegister = () => {
		const newRegister = [
			...register,
			{
				element: inputText,
				amount: inputAmount,
			},
		];
		setRegister(newRegister);
	};

	const handleEnterKey = (e) => {
		if (e.key === "Enter") {
			// debugger;
			if (e.target.id === "InputText") {
				document.querySelector("#InputAmount .p-inputnumber-input")?.focus();
			} else if (e.target.name === "iAmount") {
				handleAddRegister();
			}
		}
	};
	/* ------------- RENDER ------------- */

	return (
		<>
			<div className='gastos-form'>
				<div className='gastos-input'>
					<InputText id='InputText' onKeyDown={handleEnterKey} value={inputText} onChange={(e) => setInputText(e.target.value)} />
					<InputNumber
						id='InputAmount'
						name='iAmount'
						mode='currency'
						currency='MXN'
						locale='es-MX'
						showButtons
						value={inputAmount}
						onChange={(e) => setInputAmount(e.value)}
						onKeyDown={handleEnterKey}
					/>
					<Button outlined severity='secondary' label='Agregar' icon='pi pi-check' size='small' onClick={handleAddRegister} />
				</div>
				<div className='card p-fluid gastos-form-container'>
					<DataTable value={register} editMode='cell' showGridlines tableStyle={{ width: "30rem" }}>
						{columns.map(({ field, header }) => {
							return (
								<Column
									key={field}
									field={field}
									header={header}
									editor={(options) => inputType(options)}
									onCellEditComplete={onCellEditComplete}
									body={field === "amount" && currencyAmount}
									style={field === "amount" && { width: "30%" }}
								/>
							);
						})}
					</DataTable>
				</div>
				<div className='gastos-result'>
					<p className='gastos-result-text'>
						<strong>
							Total:
							<span className='gastos-result-amount ml-3'>
								{new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(register.reduce((acc, curr) => acc + curr.amount, 0))}
							</span>
						</strong>
					</p>
				</div>
				<div className='button-next  mt-5 w-100 flex justify-content-end'>
					<Button outlined label='Siguiente' icon='pi pi-arrow-right' size='small' onClick={() => handleNextStep(2)} />
				</div>
			</div>
		</>
	);
};

export default Gastos;
