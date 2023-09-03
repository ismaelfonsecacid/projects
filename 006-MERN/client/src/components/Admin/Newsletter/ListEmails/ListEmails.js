import React, { useEffect, useState } from "react";
import { Newsletter } from "../../../../api";
import { map, size } from "lodash";
import { useAuth } from "../../../../hooks";
import { EmailItem } from "../EmailItem";
import { Loader, Pagination } from "semantic-ui-react";

const newsController = new Newsletter();

export default function ListEmails() {
	const { accessToken } = useAuth();
	const [pagination, setPagination] = useState(null);
	const [emails, setEmails] = useState(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await newsController.getEmails(accessToken);
				setEmails(response.docs);

				setPagination({
					limit: response.limit,
					page: response.page,
					pages: response.pages,
					total: response.total,
				});
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	if (!emails) return <Loader active inline="centered" />;
	if (size(emails) === 0) return "No hay emails registrados";
	return (
		<div className="list-emails">
			{map(emails, (email) => (
				<EmailItem email={email} key={email._id} />
			))}

			<div></div>
		</div>
	);
}
