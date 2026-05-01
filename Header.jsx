import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      toast.error("Search something");
      return;
    }
    navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <header className="bg-gradient-to-b from-black/80 to-transparent fixed w-full z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <Link to="/" className="text-2xl font-bold text-yellow-400">
          MovieTracker
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/watchlist">Watchlist</Link>
        </nav>

        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            className="bg-black/40 backdrop-blur px-3 py-1 rounded outline-none"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="bg-yellow-500 px-3 rounded">Go</button>
        </form>

      </div>
    </header>
  );
};

export default Header;