// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMovies = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="img"
      />
      <div className="low-bg">
        <h1 className="heading">Action Movies</h1>
        <MovieSlider movieDetails={actionMovies} />
        <h1 className="heading">Comedy Movies</h1>
        <MovieSlider movieDetails={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
