import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

export async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map(movie => 
        <li>
          <Link 
            key={movie.id} 
            href={`/movies/${movie.id}`}
          >
            {movie.title}
          </Link>
        </li>
      )}
    </div>
  );
};