import * as Yup from "yup";

export function initialValues() {
	return {
		title: "",
		path: null,
		protocol: "https://",
		active: true,
		order: "",
	};
}

export function validationSchema() {
	return Yup.object({
		title: Yup.string().required(),
		path: Yup.string().required(),
		order: Yup.number().required(),
	});
}
