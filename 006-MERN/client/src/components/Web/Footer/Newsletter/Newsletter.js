import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import "./Newsletter.scss";
import { initialValues, validationSchema } from "./Newsletter.form";
import { Newsletter as NController } from "../../../../api/";

const newsController = new NController();

export default function Newsletter() {
	const [success, setSuccess] = useState(false);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: FontFaceSetLoadEvent,
		onSubmit: async (formValue) => {
			setSuccess(false);
			try {
				await newsController.registerEmail(formValue.email);
				formik.resetForm();
				setSuccess(true);
			} catch (error) {
				console.error(error);
			}
		},
	});

	return (
		<div className="footer-news">
			<h4>Apuntarte y aprende</h4>

			<Form onSubmit={formik.handleSubmit}>
				<Form.Input
					name="email"
					placeholder="Email"
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.errors.email}
				/>
				<Form.Button type="submit" primary fluid>
					Me suscribo
				</Form.Button>

				{success && <p className="success">Email registrado correctamente</p>}
			</Form>
		</div>
	);
}
