import * as Yup from "yup";

export function initialValues(menu) {
	return {
		title: menu?.title || "",
		path: menu?.path || null,
		protocol: "https://",
		active: menu?.active || true,
		order: menu?.order || "",
	};
}

export function validationSchema() {
	return Yup.object({
		title: Yup.string().required(),
		path: Yup.string().required(),
		order: Yup.number().required(),
	});
}
