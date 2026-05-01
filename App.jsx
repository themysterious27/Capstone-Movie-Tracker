import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WatchlistProvider } from "./context/WatchlistContext";
import { Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Watchlist from "./pages/Watchlist";

function App() {
  return (
    <WatchlistProvider>
      <BrowserRouter>

        <Header />
        <Toaster position="top-right" />

        <main className="pt-20 min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/tv" element={<TVShows />} />
            <Route path="/search/:query" element={<Search />} />
            <Route path="/details/:type/:id" element={<Details />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </main>

        <Footer />

      </BrowserRouter>
    </WatchlistProvider>
  );
}

export default App;