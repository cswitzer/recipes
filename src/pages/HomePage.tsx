import { NavLink } from "react-router-dom";

export default function HomePage() {
	const recipeIds = [1, 2, 3, 4, 5];

	return (
		<div className='flex flex-col gap-2'>
			{recipeIds.map((id) => (
				<NavLink
					key={id}
					to={`/recipe/${id}`}
					className={({ isActive }) =>
						isActive ? "text-red-500" : "text-blue-500"
					}
				>
					Recipe with id {id}
				</NavLink>
			))}
			{/* For rendering children in react router for <HomePage /> anywhere on the page */}
			{/* <Outlet /> */}
		</div>
	);
}
