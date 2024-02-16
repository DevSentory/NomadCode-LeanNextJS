import Link from 'next/link'
import Movies from '../../components/movie'
import styles from '../../styles/home.module.css'

export const metadata = {
  title: 'Home',
}

const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export default async function HomePage() {
  const movies = await getMovie()
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movies
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
        />
      ))}
    </div>
  )
}

async function getMovie() {
  const response = await fetch(API_URL)
  const json = await response.json()
  return json
}
