import { error } from "console";
import { API_URL } from "../app/(home)/page";

export default async function MovieVideos(id) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}

async function getVideos({ id }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  throw new Error("Something broke...");
  //const response = await fetch(`${API_URL}/${id}/videos`);
  //return response.json();
}
