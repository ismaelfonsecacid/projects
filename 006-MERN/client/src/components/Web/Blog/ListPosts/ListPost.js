import React, { useEffect, useState } from "react";
import "./ListPost.scss";
import { Post } from "../../../../api";
import { Loader, Pagination } from "semantic-ui-react";
import { map } from "lodash";
import { ListPostItem } from "../ListPostItem";
import { useNavigate, useSearchParams } from "react-router-dom";

const postController = new Post();

export default function ListPost() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [posts, setPosts] = useState(null);
	const [pagination, setPagination] = useState();
	const [page, setPage] = useState(searchParams.get("page") || 1);

	useEffect(() => {
		(async () => {
			try {
				const response = await postController.getPosts(page, 6);
				setPosts(response.docs);
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
	}, [page]);

	const changePage = (_, data) => {
		const newPage = data.activePage;
		setPage(newPage);
		navigate(`?page=${newPage}`);
	};

	if (!posts) return <Loader active inline="centered" />;

	return (
		<div className="list-posts-web">
			<div className="list">
				{map(posts, (post) => (
					<div key={post._id} className="item">
						<ListPostItem post={post} />
					</div>
				))}
			</div>

			<div className="pagination">
				<Pagination
					totalPages={pagination.pages}
					defaultActivePage={pagination.page}
					ellipsisItem={null}
					firstItem={null}
					lastItem={null}
					secondary
					pointing
					onPageChange={changePage}
				/>
			</div>
		</div>
	);
}
