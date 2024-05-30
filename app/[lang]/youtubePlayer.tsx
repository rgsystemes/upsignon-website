import Script from "next/script";
import { getDictionary } from "../../translations/translations";

export default function YoutubePlayer(params: { lang: string; videoId: string; height: number; width: number }) {
  const t = getDictionary(params.lang);
  const playerId = `player-${params.videoId}`;
  return (
    <div>
      <div id={playerId}></div>
      <Script src="https://www.youtube.com/iframe_api" />
      <Script id={`youtube-${playerId}`}>
        {`function onYouTubeIframeAPIReady() {
        player = new YT.Player('${playerId}', {
          height: '${params.height}',
          width: '${params.width}',
          videoId: '${params.videoId}',
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        });
      }`}
      </Script>
    </div>
  );
}
