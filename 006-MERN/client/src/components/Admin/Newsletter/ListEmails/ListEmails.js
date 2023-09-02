import React, { useEffect, useState } from "react";
import { Newsletter } from "../../../../api";
import { useAuth } from "../../../../hooks";

const newsController = new Newsletter();

export default function ListEmails() {
	const { accessToken } = useAuth();
	const [emails, setEmails] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await newsController.getEmails(accessToken);
				console.log(response);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<h2>ListEmails</h2>
		</div>
	);
}
