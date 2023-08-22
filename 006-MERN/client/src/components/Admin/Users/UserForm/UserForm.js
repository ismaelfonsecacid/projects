import React from "react";
import { Form, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./UserForm.form";

export default function UserForm(props) {
	const { close, onReload, user } = props;

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				console.log(formValue);
			} catch (error) {
				throw error;
			}
		},
	});
	return (
		<Form className="user-form" onSubmit={formik.handleSubmit}>
			<div className="user-form__avatar">AVATAR</div>
			<Form.Group width="equal">
				<Form.Input
					name="firstname"
					placeholder="Nombre"
					onChange={formik.handleChange}
					value={formik.values.firstname}
					error={formik.errors.firstname}
				/>
				<Form.Input
					name="lastname"
					placeholder="Apellidos"
					onChange={formik.handleChange}
					value={formik.values.lastname}
					error={formik.errors.lastname}
				/>
			</Form.Group>
			<Form.Group width="equal">
				<Form.Input
					name="email"
					placeholder="Correo electronico"
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.errors.email}
				/>
				<Form.Dropdown
					placeholder="Seleciona un rol"
					options={roleOptions}
					selection
					onChange={(_, data) => {
						formik.setFieldValue("role", data.value);
					}}
					value={formik.values.role}
					error={formik.errors.role}
				/>
			</Form.Group>
			<Form.Input
				name="password"
				placeholder="Contraseña"
				type="password"
				onChange={formik.handleChange}
				value={formik.values.password}
				error={formik.errors.password}
			/>
			<Form.Button primary fluid type="submit" loading={formik.isSubmitting}>
				{user ? "Actualizar usuario" : "Crear nuevo usuario"}
			</Form.Button>
		</Form>
	);
}

const roleOptions = [
	{
		key: "User",
		text: "Usuario",
		value: "user",
	},
	{
		key: "Admin",
		text: "Administrador",
		value: "admin",
	},
];
