import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Somthing broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
};

export default async function MovieVedios({id}: {id: string} ) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
};