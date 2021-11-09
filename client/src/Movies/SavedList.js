import React from 'react';
import {Link} from "react-router-dom";

export default function SavedList(props) {
    const {saved} = props;

  return (
      <div className="saved-list">
          <h3>Saved Movies:</h3>
          {saved.map(movie => (
              <Link to={`/movies/${movie.id}`} className="saved-movie">{movie.title}</Link>
          ))}
      </div>
  );
}
