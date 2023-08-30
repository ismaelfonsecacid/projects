import React, { useState, useEffect } from "react";
import { User } from "../../../../api";
import { Loader } from "semantic-ui-react";
import { size } from "lodash";
import { useAuth } from "../../../../hooks";

export default function ListUsers(props) {
	const userController = new User();
	const { usersActive } = props;
	const [users, setUsers] = useState(null);
	const { accessToken } = useAuth();

	useEffect(() => {
		// Define the async function and immediately invoke it
		(async () => {
			try {
				setUsers(null);
				const response = await userController.getUsers(
					accessToken,
					usersActive
				);

				setUsers(response);
			} catch (error) {}
		})();
	}, [usersActive]); // Include dependencies in the dependency array

	if (!users) return <Loader active inline="centered" />;
	if (size(users) === 0) return "No hay ningun usuario";
	return (
		<div>
			<h2>Estamos usuarios</h2>
			<p>{usersActive ? "Activos" : "Inactivos"}</p>
		</div>
	);
}
