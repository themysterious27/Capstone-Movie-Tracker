import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

const Watchlist = () => {
  const { watchlist, toggleWatchlist } = useContext(WatchlistContext);

  if (!watchlist.length) {
    return (
      <div className="text-center mt-20 text-gray-400">
        <p className="text-lg">Your watchlist is empty</p>
        <p className="text-sm">Start adding movies</p>
      </div>
    );
  }

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold mb-4">My Watchlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {watchlist.map((item) => (
          <div key={item.id} className="relative group">
            
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="rounded-lg"
            />

            <button
              onClick={() => toggleWatchlist(item)}
              className="absolute top-2 right-2 bg-black/70 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition"
            >
              Remove
            </button>

            <p className="mt-2 text-sm">
              {item.title || item.name}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;