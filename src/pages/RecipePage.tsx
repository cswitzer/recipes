import { useParams } from "react-router-dom";

export default function RecipePage() {
	const { id } = useParams<{ id: string }>();
	return <div>Recipe with id {id}</div>;
}
