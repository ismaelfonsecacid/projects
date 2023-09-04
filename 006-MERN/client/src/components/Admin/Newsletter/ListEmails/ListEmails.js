import React, { useEffect, useState } from "react";
import { Newsletter } from "../../../../api";
import { map, size } from "lodash";
import { useAuth } from "../../../../hooks";
import { EmailItem } from "../EmailItem";
import { Loader, Pagination } from "semantic-ui-react";
import "./ListEmails.scss";

const newsController = new Newsletter();

export default function ListEmails() {
	const { accessToken } = useAuth();
	const [pagination, setPagination] = useState(null);
	const [page, setPage] = useState(1);
	const [emails, setEmails] = useState(null);
	const [reload, setReload] = useState(false);

	const onReload = () => setReload((prevState) => !prevState);

	useEffect(() => {
		(async () => {
			try {
				const response = await newsController.getEmails(accessToken, page);
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
	}, [page, reload]);

	const changePage = (_, data) => {
		setPage(data.activePage);
	};
	if (!emails) return <Loader active inline="centered" />;
	if (size(emails) === 0) return "No hay emails registrados";
	return (
		<div className="list-emails">
			{map(emails, (email) => (
				<EmailItem email={email} key={email._id} onReload={onReload} />
			))}

			<div className="list-emails__pagination">
				<Pagination
					totalPages={pagination.pages}
					defaultActivePage={pagination.page}
					ellipsisItem={false}
					firstItem={false}
					lastItem={false}
					onPageChange={changePage}
				/>
			</div>
		</div>
	);
}
