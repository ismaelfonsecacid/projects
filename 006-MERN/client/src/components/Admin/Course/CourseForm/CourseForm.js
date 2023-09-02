import React, { useCallback } from "react";
import "./CourseForm.scss";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
export default function CourseForm() {
	const onDrop = useCallback((acceptedFiles) => {
		const file = acceptedFiles[0];
		console.log(file);
	});
	const { getRootProps, getInputProps } = useDropzone({
		accept: "image/jpeg, image/png",
		onDrop,
	});

	const getMiniature = () => {
		return null;
	};
	return (
		<Form className="course-form">
			<div className="course-form__miniature" {...getRootProps()}>
				<input {...getInputProps()} />
				{getMiniature() ? (
					<Image size="small" src={getMiniature} />
				) : (
					<div>
						<span>Arrastra tu miniatura</span>
					</div>
				)}
			</div>

			<Form.Input name="title" placeholder="ncurso" />
			<Form.Input name="url" placeholder="link" />
			<Form.TextArea name="description" placeholder="Small desc" />

			<Form.Group widths="equal">
				<Form.Input type="number" placeholder="Precio" name="precio" />
				<Form.Input
					type="number"
					placeholder="Puntuacion del curso"
					name="score"
				/>
			</Form.Group>

			<Form.Button type="submit" primary fluid>
				Crear curso
			</Form.Button>
		</Form>
	);
}
