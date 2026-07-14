import { useEffect } from "react";
import { addMovieTrailer } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/PageLinks";
import { useDispatch } from "react-redux";

const usePlayingTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieTrailer = async () => {
    if (!movieId) return;
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS,
      );
      const json = await data.json();
      const results = json.results || [];

      const trailer =
        results.find((v) => v.type === "Trailer" && v.site === "YouTube") ||
        results.find((v) => v.name === "Official Trailer") ||
        results.find((v) => v.site === "YouTube") ||
        results[0] ||
        null;

      dispatch(addMovieTrailer(trailer));
    } catch (err) {
      console.error("Failed to fetch trailer:", err);
      dispatch(addMovieTrailer(null));
    }
  };

  useEffect(() => {
    movieTrailer();
  }, [movieId]);
};
export default usePlayingTrailer;
