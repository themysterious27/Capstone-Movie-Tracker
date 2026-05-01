import { Link } from "react-router-dom";
import React from "react";

const MovieCard = React.memo(({ item, type }) => {
  const image = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/details/${type}/${item.id}`}>
      <div className="relative group min-w-[180px]">
        <img
          src={image}
          alt={item.title || item.name}
          className="h-64 w-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-lg" />

        <div className="absolute bottom-2 left-2 right-2">
          <h2 className="text-sm font-semibold truncate">
            {item.title || item.name}
          </h2>
          <p className="text-xs text-gray-300">
            {item.vote_average?.toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
});

export default MovieCard;