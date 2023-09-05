import React from "react";
import { Routes, Route } from "react-router-dom";
import { ClientLayout } from "../layouts";
import { Blog, Post, Contact, Courses, Home } from "../pages/web";

export default function WebRouter() {
	const loadLayout = (Layout, Page) => {
		return (
			<Layout>
				<Page />
			</Layout>
		);
	};
	return (
		<Routes>
			<Route path="/" element={loadLayout(ClientLayout, Home)} />
			<Route path="/courses" element={loadLayout(ClientLayout, Courses)} />
			<Route path="/blog" element={loadLayout(ClientLayout, Blog)} />
			<Route path="/blog/:path" element={loadLayout(ClientLayout, Post)} />
		</Routes>
	);
}
