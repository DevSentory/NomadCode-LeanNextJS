import { error } from 'console'
import styles from '../styles/movie-video.module.css'
import { API_URL } from '../app/(home)/page'

export default async function MovieVideos(id) {
  const videos = await getVideos(id)
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`http://youtube.com/embed/${video.key}`}
          title={video.name}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      ))}
    </div>
  )
}

async function getVideos({ id }) {
  //throw new Error("Something broke...");
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json()
}
