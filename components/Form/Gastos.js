import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";

const columns = [
	{ field: "element", header: "Gasto" },
	{ field: "amount", header: "Monto" },
];

const Gastos = () => {
	const [register, setRegister] = useState([]);
	const [inputText, setInputText] = useState("");
	const [inputAmount, setInputAmount] = useState(0);

	const inputType = (options) => {
		if (options.field === "amount") return amountEditor(options);
		return textEditor(options);
	};

	const onCellEditComplete = (e) => {
		let { rowData, newValue, field, originalEvent: event } = e;

		setInputText("");
		setInputAmount(0);
		switch (field) {
			case "amount":
				rowData[field] = newValue;
				event.preventDefault();
				set;
				break;

			default:
				if (newValue.trim().length > 0) rowData[field] = newValue;
				else event.preventDefault();
				break;
		}
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

	const currencyAmount = (rowData) => {
		return new Intl.NumberFormat("es-MX", {
			style: "currency",
			currency: "MXN",
		}).format(rowData.amount);
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
			debugger;
			if (e.target.id === "InputText") {
				document.querySelector("#InputAmount .p-inputnumber-input")?.focus();
			} else if (e.target.name === "iAmount") {
				handleAddRegister();
			}
		}
	};

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
					<Button label='Agregar' icon='pi pi-check' size='small' onClick={handleAddRegister} />
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
							{new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(register.reduce((acc, curr) => acc + curr.amount, 0))}
						</strong>
					</p>
				</div>
			</div>
		</>
	);
};

export default Gastos;
