import useFetch from "../hooks/useFetch";
import MovieCard from "../components/MovieCard";
import Hero from "../components/Hero";

const Home = () => {
  const { data } = useFetch("/trending/all/week?");

  return (
    <div>

      <Hero />

      <div className="px-4 mt-6">

        <h2 className="text-xl mb-3">Trending Now</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {data.map((item) => (
            <MovieCard
              key={item.id}
              item={item}
              type={item.media_type}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Home;