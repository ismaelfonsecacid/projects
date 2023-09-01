import React, { useState, useEffect } from "react";
import { User } from "../../../../api";
import { Loader } from "semantic-ui-react";
import { size, map } from "lodash";
import { useAuth } from "../../../../hooks";
import { UserItem } from "../UserItem";

export default function ListUsers(props) {
	const userController = new User();
	const { usersActive, reload, onReload } = props;
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
	}, [usersActive, reload]); // Include dependencies in the dependency array

	if (!users) return <Loader active inline="centered" />;
	if (size(users) === 0) return "No hay ningun usuario";
	return map(users, (user) => (
		<UserItem key={user._id} user={user} onReload={onReload} />
	));
}
