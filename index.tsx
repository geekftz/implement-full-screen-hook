import { useFullScreen } from "./useFullScreen";

// usage

function Demo() {
  // * video url
  const url = "http://";

  const [videoRef, enter] = useFullScreen();

  return (
    <span key={url} className={"content-item"} onClick={() => enter()}>
      <span className={"content-item-play"}></span>

      <video
        ref={videoRef}
        controlsList="nofullscreen nodownload noremoteplayback"
        width="100%"
        height="100%"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "fill",
        }}
      >
        <source src={url} type="video/mp4" />
        Sorry, your browser doesn't support embedded videoConfigs.
      </video>
    </span>
  );
}
