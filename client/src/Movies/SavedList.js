import React from 'react';
import {NavLink} from "react-router-dom";
import SavedMovie from "./SavedMovie";
import {Link} from "react-router-dom";

export default function SavedList(props) {
    const {saved} = props;

  return (
      <div className="saved-list">
          <h3>Saved Movies:</h3>
          {saved.map(movie => (
              <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
          ))}
          <NavLink to="/" className="home-button">Home</NavLink>
      </div>
  );
}
