import React from "react";
import { Form, Dropdown, Input } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./MenuForm.form";
import { Menu } from "../../../../api";
import { useAuth } from "../../../../hooks";

export default function MenuForm(props) {
	const menuController = new Menu();
	const { accessToken } = useAuth();
	const { onClose, onReload, menu } = props;
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: FontFaceSetLoadEvent,
		onSubmit: async (formValue) => {
			try {
				const data = {
					title: formValue.title,
					path: `${formValue.protocol}${formValue.path}`,
					order: formValue.order,
					active: formValue.active,
				};

				if (menu) {
					console.log("update");
				} else {
					await menuController.createMenu(accessToken, data);
				}
				onClose();
				onReload();
			} catch (error) {
				console.error(error);
			}
		},
	});
	return (
		<Form onSubmit={formik.handleSubmit}>
			<Form.Group widths="equal">
				<Form.Input
					name="title"
					placeholder="Titulo"
					onChange={formik.handleChange}
					value={formik.values.title}
					error={formik.errors.title ? true : false} // Convierte el error a un booleano
				/>
				<Form.Input
					type="number"
					name="order"
					placeholder="order"
					onChange={formik.handleChange}
					value={formik.values.order}
					error={!!formik.errors.order}
				/>
			</Form.Group>

			<Input
				name="path"
				placeholder="url"
				fluid
				onChange={formik.handleChange}
				value={formik.values.path || ""}
				error={!!formik.errors.path}
				label={
					!menu ? (
						<Dropdown
							options={options}
							onChange={(_, data) =>
								formik.setFieldValue("protocol", data.value)
							}
							value={formik.values.protocol}
							error={formik.errors.protocol}
						/>
					) : null
				}
			/>

			<br />
			<Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
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
