export const metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

export async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

export default async function Page() {
  const movies = await getMovies();

  return (
    <div>
      {JSON.stringify(movies)}
    </div>
  );
};