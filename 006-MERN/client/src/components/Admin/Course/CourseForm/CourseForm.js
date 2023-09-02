import React, { useCallback } from "react";
import "./CourseForm.scss";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./CourseForm.form";
import { Course } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { ENV } from "../../../../utils";

export default function CourseForm(props) {
	const { accessToken } = useAuth();
	const { onClose, onReload, course } = props;
	console.log(course);
	const courseController = new Course();
	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		formik.setFieldValue("miniature", URL.createObjectURL(file));
		formik.setFieldValue("file", file);
	});
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/jpeg, image/png",
		onDrop,
	});

	const getMiniature = () => {
		if (formik.values.file) {
			return formik.values.miniature;
		} else if (formik.values.miniature) {
			return `${ENV.BASE_PATH}/${formik.values.miniature}`;
		}
		return null;
	};

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				if (!course) {
					await courseController.createCourse(accessToken, formValue);
				} else {
					await courseController.updateCourse(
						accessToken,
						course._id,
						formValue
					);
				}
				onReload();
				onClose();
			} catch (error) {
				throw error;
			}
		},
	});
	return (
		<Form className="course-form" onSubmit={formik.handleSubmit}>
			<div className="course-form__miniature" {...getRootProps()}>
				<input {...getInputProps()} />
				{getMiniature() ? (
					<Image size="small" src={getMiniature()} />
				) : (
					<div>
						<span>Arrastra tu miniatura</span>
					</div>
				)}
			</div>

			<Form.Input
				name="title"
				placeholder="ncurso"
				onChange={formik.handleChange}
				value={formik.values.title}
				error={formik.errors.title}
			/>
			<Form.Input
				name="url"
				placeholder="link"
				onChange={formik.handleChange}
				value={formik.values.url}
				error={formik.errors.url}
			/>
			<Form.TextArea
				name="description"
				placeholder="Small desc"
				onChange={formik.handleChange}
				value={formik.values.description}
				error={formik.errors.description}
			/>

			<Form.Group widths="equal">
				<Form.Input
					type="number"
					placeholder="Precio"
					name="price"
					onChange={formik.handleChange}
					value={formik.values.price}
					error={formik.errors.price}
				/>
				<Form.Input
					type="number"
					placeholder="Puntuacion del curso"
					name="score"
					onChange={formik.handleChange}
					value={formik.values.score}
					error={formik.errors.score}
				/>
			</Form.Group>

			<Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
				{!course ? "Crear curso" : "Actualizar curso"}
			</Form.Button>
		</Form>
	);
}
