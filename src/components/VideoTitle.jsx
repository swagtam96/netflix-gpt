const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-11 absolute aspect-video z-10 top-0 pt-[22%] bg-linear-to-r from-black ">
      <p className="text-5xl text-white mb-2">{title}</p>
      <p className="text-xl text-white w-1/4">{overview}</p>
      <div className="flex mt-4 *:rounded   *:px-2.5 *:py-1.5 *:m-2.5 *:cursor-pointer ">
        <button className="bg-white hover:opacity-60">Play Now</button>
        <button className="bg-gray-600 text-white hover:bg-gray-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
