import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

// import index.css
import "./index.css";
import RecipePage from "./pages/RecipePage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NotFoundPage />,
		// children: [
		// 	{
		// 		path: "recipe/:id",
		// 		element: <RecipePage />,
		// 	},
		// ],
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
	{
		path: "/recipe/:id",
		element: <RecipePage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div>NAVBAR</div>
		<RouterProvider router={router} />
	</React.StrictMode>
);
