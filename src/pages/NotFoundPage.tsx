import { Link } from "react-router-dom"; // how we link to pages in react router

export default function NotFoundPage() {
	return (
		<div className='flex flex-col gap-2 text-opacity-10'>
			404 - Page Not Found
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</div>
	);
}
