import { useParams } from "react-router-dom";

export default function SessionsMovie () {
    const { movieId } = useParams();

    return (
        <>
        <h1>sessões{movieId}</h1>

        </>
    )
}   