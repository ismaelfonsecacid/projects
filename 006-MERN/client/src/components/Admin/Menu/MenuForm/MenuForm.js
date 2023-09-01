import React from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";

export default function MenuForm(props) {
	const { onClose, onReload, menu } = props;
	return (
		<Form>
			<Form.Group widths="equal">
				<Form.Input name="title" placeholder="Titulo" />
				<Form.Input name="number" placeholder="order" />
			</Form.Group>

			<Input
				name="path"
				placeholder="url"
				fluid
				label={!menu ? <Dropdown options={options} /> : null}
			/>

			<br />
			<Form.Button type="submit" primary fluid>
				{menu ? "Actualizar menu" : "Crear menu"}
			</Form.Button>
		</Form>
	);
}

const options = [
	{ key: "https://", text: "https://", value: "https://" },
	{ key: "http://", text: "http://", value: "http://" },
	{ key: "/", text: "/", value: "/" },
];
