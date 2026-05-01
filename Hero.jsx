import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const Hero = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then((res) => {
        const random =
          res.data.results[
            Math.floor(Math.random() * res.data.results.length)
          ];
        setMovie(random);
      });
  }, []);

  if (!movie) return null;

  return (
    <div className="h-[70vh] relative">

      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute bottom-10 left-6 max-w-lg">

        <h1 className="text-4xl font-bold mb-2">
          {movie.title}
        </h1>

        <p className="text-sm text-gray-300 mb-4">
          {movie.overview?.slice(0, 120)}...
        </p>
      </div>
    </div>
  );
};

export default Hero;