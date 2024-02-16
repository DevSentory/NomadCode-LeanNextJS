import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function HomePage() {
  const movies = await getMovie();
  return (
    <div>
      {movies.map((movie) => (
        <li>
          <Link href={`/movies/${movie.id}`}>
            {movie.title} [id : {movie.id}]
          </Link>
        </li>
      ))}
    </div>
  );
}

async function getMovie() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}
