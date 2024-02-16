import { Suspense } from 'react'
import MovieInfo, { getMovie } from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

/**
 * [동적 메타데이터] 동적인 페이지를 위한 함수
 */
export async function generateMetadata({ params: { id } }) {
  const movie = await getMovie({ id })
  return {
    title: movie.title,
  }
}

export default async function MovieDetailPage({ params: { id } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}

//const ComponentName = async() = {}
