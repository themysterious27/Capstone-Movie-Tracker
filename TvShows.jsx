import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import SkeletonCard from "../components/SkeletonCard";

const Section = ({ title, data }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {data && data.length > 0
          ? data.map((item) => (
              <MovieCard key={item.id} item={item} type="tv" />
            ))
          : Array(6)
              .fill(0)
              .map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </div>
  );
};

const TVShows = () => {
  const popular = useFetch("/tv/popular?");
  const topRated = useFetch("/tv/top_rated?");
  const airing = useFetch("/tv/on_the_air?");

  return (
    <div className="px-6 space-y-8">

      <Section title="Popular TV Shows" data={popular?.data || []} />
      <Section title="Top Rated" data={topRated?.data || []} />
      <Section title="On Air Now" data={airing?.data || []} />

    </div>
  );
};

export default TVShows;