import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideo(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("Somthing broke...");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

export default async function MovieVedios({id}: {id: string} ) {
  const videos = await getVideo(id);

  return (
    <div className={styles.container}>
      {videos.map(video => (
        <iframe 
          key={video.id} 
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name} />
      ))}
    </div>
  )
};