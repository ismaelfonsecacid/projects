import React from "react";
import "./Reviews.scss";
import { Container, Image } from "semantic-ui-react";
import { map } from "lodash";
import { reviewsData } from "./Reviews.data";
export default function Reviews() {
	return (
		<Container className="reviews">
			<h2>Forma parte de los 150 mil estudiantes</h2>

			<div className="reviews__list">
				{map(reviewsData, (review, index) => (
					<div key={index}>
						<p>{review.comment}</p>
						<div className="reviews__list-user">
							<Image src={review.avatar} avatar />
							<div>
								<span>{review.userName}</span>
								<span>{review.userType}</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</Container>
	);
}
