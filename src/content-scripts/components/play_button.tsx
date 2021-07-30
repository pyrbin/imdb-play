type PlayButtonProps = {
  href: string
}

export function PlayButton({ href }: PlayButtonProps) {
  return (
    <a href={href} target="_blank" class="imdb-play-button" style={{
        color: "#1f1f1f",
        background: "rgb(245,197,24)",
        margin: "0px 12px 0px 8px",
        height: "35px",
        width: "126px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 4px 0px 4px",
        borderRadius: "4px",
        transition: "all 0.33s",
        textDecoration: "none",
      }}>
      <span style={{
        fontWeight: "bold",
        marginRight: "6px",
      }}> Play </span>
      <span style={{
        fontSize: "16px",
      }}> ▶ </span>
    </a>
  );
}
