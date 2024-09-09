export default function VimeoPlayer(params: { videoId: string; title: string; className?: string | null }) {
  return (
    <div className={params.className}>
      <iframe
        src={`https://player.vimeo.com/video/${params.videoId}?badge=1&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        width="100%"
        height="auto"
        style={{ aspectRatio: 1.7766 }}
        frameBorder="0"
        allow="fullscreen; picture-in-picture; clipboard-write"
        title={params.title}
      ></iframe>
    </div>
  );
}
