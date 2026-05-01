import { createContext, useEffect, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const isInWatchlist = (id) => {
    return watchlist.some((item) => item.id === id);
  };

  const toggleWatchlist = (item) => {
    setWatchlist((prev) => {
      if (prev.some((i) => i.id === item.id)) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, toggleWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};