import React from "react";
import { useCallback } from "react";
import { Form, Image } from "semantic-ui-react";
import { useFormik } from "formik";
import { image } from "../../../../assets/";
import { initialValues, validationSchema } from "./UserForm.form";
import { useDropzone } from "react-dropzone";
import { User } from "../../../../api";
import { useAuth } from "../../../../hooks";
import "./UserForm.scss";

const userController = new User();

export default function UserForm(props) {
	const { close, onReload, user } = props;
	const { accessToken } = useAuth();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				await userController.createUser(accessToken, formValue);
				close();
			} catch (error) {
				throw error;
			}
		},
	});

	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		formik.setFieldValue("avatar", URL.createObjectURL(file));
		formik.setFieldValue("fileAvatar", file);
	});

	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/jpeg, image/png",
		onDrop,
	});

	const getAvatar = () => {
		if (formik.values.fileAvatar) {
			return formik.values.avatar;
		}
		return image.noAvatar;
	};

	return (
		<Form className="user-form" onSubmit={formik.handleSubmit}>
			<div className="user-form__avatar" {...getRootProps()}>
				<input {...getInputProps} />
				<Image avatar size="small" src={getAvatar()} />
			</div>
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
