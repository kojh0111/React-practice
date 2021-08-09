import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=year");
    setMovies(movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="MovieList">
      <ul>
        {movies.map(({ id, title, year, rating }) => {
          return <Movie id={id} title={title} year={year} rating={rating} />;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
