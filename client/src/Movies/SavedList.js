import React from 'react';
import { Route, NavLink, useHistory } from 'react-router-dom'

export default function SavedList(props) {
  const history = useHistory()

  const routeToHome = () => {
    history.push('/')
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <NavLink to='/'>
        <button className="home-button" onClick={routeToHome}>Home</button>
      </NavLink>
      
      <Route path="/">
        {/* <MovieList /> */}
      </Route>
    </div>

  );
}
