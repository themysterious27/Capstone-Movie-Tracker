import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { WatchlistContext } from "../context/WatchlistContext";
import toast from "react-hot-toast";

const API_KEY = import.meta.env.VITE_TMDB_KEY;

const Details = () => {
  const { id, type } = useParams();
  const [data, setData] = useState(null);

  const { toggleWatchlist, isInWatchlist } = useContext(WatchlistContext);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`)
      .then((res) => setData(res.data));
  }, [id, type]);

  if (!data) return <p>Loading...</p>;

  const isAdded = isInWatchlist(data.id);

  const handleClick = () => {
    toggleWatchlist(data);

    if (isAdded) {
      toast.success("Removed from watchlist");
    } else {
      toast.success("Added to watchlist");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title || data.name}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-3xl font-bold mb-3">
          {data.title || data.name}
        </h1>

        <p className="text-gray-400 mb-3">
          {data.overview}
        </p>

        <p className="mb-2"> {data.vote_average}</p>

        <button
          onClick={handleClick}
          className="bg-yellow-500 px-4 py-2 rounded mt-3"
        >
          {isAdded ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
};

export default Details;