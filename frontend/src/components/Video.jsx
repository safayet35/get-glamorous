const Video = ({ link }) => {
  return (
    <video
      className="h-72 w-full"
      muted={true}
      autoPlay={true}
      src={link}
    ></video>
  );
};

export default Video;
