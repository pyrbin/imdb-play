import { domRender } from "./dom";
import { PlayButton } from "./components/play_button";
import { getMediaEntry } from "./imdb";
import { name, version } from "../manifest.json";

import "./global.css";

signature(name, version);

const url = document.location.href;
const parentDiv = document.querySelector(`[data-testid="hero-subnav-bar-right-block"]`)!;
const shareButtonDiv = document.querySelector(`[data-testid="hero-subnav-bar-share-button"]`)!;

const isSeriesRoot = () => document.querySelector(`[data-testid="hero-subnav-bar-series-episode-guide-link"]`) != undefined;

// Don't add a play button if we're on a series root page
if (!isSeriesRoot()) {

  // Get media entry data
  const media = getMediaEntry(url);

  // Add a play button to the page
  parentDiv.insertBefore(
    domRender(<PlayButton href={media.videoUrl} />), shareButtonDiv);

}


function signature(name: string, version: string) {
  const signature = `%c ${name} v${version} loaded... 📡`;
  const styles= [
      "font-size: 18px",
      "font-family: monospace",
      "font-weight: bold",
      "background-color: #FFE53B",
      "background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
      "display: flex",
      "color: black",
      "margin: 24px 16px",
      "padding: 8px 19px",
      "border: 1px dashed;"
  ].join(";")

  console.log(signature, styles);
}
