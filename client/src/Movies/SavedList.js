import React from 'react';
import { Route, NavLink } from 'react-router-dom'

export default function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink to='/'><div className="home-button">Home</div></NavLink>
      <Route path="/">
        {/* <MovieList /> */}
      </Route>
    </div>

  );
}
