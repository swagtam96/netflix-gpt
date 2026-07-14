import { useSelector } from "react-redux";
import usePlayingTrailer from "../hooks/usePlayTrailer";

const VideoBackground = ({ movieId }) => {
  const playMovieTrailer = useSelector((store) => store.movies?.trailerVideo);
  usePlayingTrailer(movieId);
  // only render iframe when we have a YouTube key
  if (!playMovieTrailer?.key) {
    return <div className="w-screen aspect-video bg-black" />;
  }

  return (
    <div>
      <div className="absolute z-0 top-0 pointer-events-none">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${playMovieTrailer.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
