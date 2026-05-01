import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

const Search = () => {
  const { query } = useParams();
  const { data, loading } = useFetch(`/search/multi?query=${query}`);

  const filtered = data?.filter(
    (item) =>
      (item.media_type === "movie" || item.media_type === "tv") &&
      item.poster_path
  );

  return (
    <div className="px-6">
      <h1 className="text-2xl font-bold mb-4">
        Results for "{query}"
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)
          : filtered?.map((item) => (
              <MovieCard
                key={item.id}
                item={item}
                type={item.media_type}
              />
            ))}
      </div>

      {!loading && filtered?.length === 0 && (
        <p className="text-gray-400 mt-10 text-center">
          No results found
        </p>
      )}
    </div>
  );
};

export default Search;