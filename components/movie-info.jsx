import styles from '../styles/movie-info.module.css'
import { API_URL } from '../app/(home)/page'

export default async function MovieInfo(id) {
  const movie = await getMovie(id)
  return (
    <div className={styles.contaner}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>★{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_black'}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  )
}

export async function getMovie({ id }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}
