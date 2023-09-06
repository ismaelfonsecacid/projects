import React from "react";
import "./ListPostItem.scss";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { ENV } from "../../../../utils";
import { DateTime } from "luxon";

export default function ListPostItem(props) {
	const { post } = props;
	const createdAt = DateTime.fromISO(post.created_at);

	// Formatear la fecha en español (dd 'de' LLLL 'del' yyyy)
	const formattedDate = createdAt
		.setLocale("es")
		.toFormat("dd 'de' LLLL 'del' yyyy");

	return (
		<Link className="list-post-item" to={`/blog/${post.path}`}>
			<Image src={`${ENV.BASE_PATH}/${post.miniature}`} fluid />
			<h2>{post.title}</h2>
			<span>{formattedDate}</span>
		</Link>
	);
}
