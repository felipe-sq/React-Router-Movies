import React from 'react';
import { Link, useRouteMatch , useParams } from 'react-router-dom'

export default function MovieList(props) {
  // const { pathname } = useLocation()

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        // <Link to={`${pathname}/${movie.id}`}>
        <MovieDetails key={movie.id} movie={movie} />
        // </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  // const { path, url } = useRouteMatch()
  // const { moviesID } = useParams()
  return (
    <div className="movie-card">
      {/* <Link to={`${url}/${moviesID}`}> */}
      <h2>{title}</h2>
      {/* </Link> */}
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
