import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

const Section = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {data?.length
          ? data.map((item) => (
              <MovieCard key={item.id} item={item} type="movie" />
            ))
          : Array(6)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </div>
  );
};

const Movies = () => {
  const popular = useFetch("/movie/popular?");
  const topRated = useFetch("/movie/top_rated?");
  const upcoming = useFetch("/movie/upcoming?");

  return (
    <div className="px-6 space-y-8">

      <Section title="Popular Movies" data={popular.data} />
      <Section title="Top Rated" data={topRated.data} />
      <Section title="Upcoming" data={upcoming.data} />

    </div>
  );
};

export default Movies;