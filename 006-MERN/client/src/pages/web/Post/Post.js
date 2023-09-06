import React, { useEffect, useState } from "react";
import "./Post.scss";
import { useParams } from "react-router-dom";
import { Post as PController } from "../../../api";
import { Container, Loader } from "semantic-ui-react";

const postController = new PController();

export default function Post() {
	const [post, setPost] = useState(null);
	const { path } = useParams();

	useEffect(() => {
		(async () => {
			const response = await postController.getPost(path);
			setPost(response);
		})();
	}, [path]);

	if (!post) return <Loader active inline="centered" />;
	return (
		<Container className="post">
			<h1 className="title">{post.title}</h1>

			<div
				className="content"
				dangerouslySetInnerHTML={{ __html: post.content }}
			/>
		</Container>
	);
}
