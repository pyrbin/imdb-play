import { domRender } from "./dom";
import { PlayButton } from "./components/play_button";
import { getMediaEntry } from "./imdb";

import "./global.css";

const url = document.location.href;
const parentDiv = document.querySelector(`[data-testid="hero-subnav-bar-right-block"]`)!;
const shareButtonDiv = document.querySelector(`[data-testid="hero-subnav-bar-share-button"]`)!;

const isSeriesRoot = () => document.querySelector(`[data-testid="hero-subnav-bar-series-episode-guide-link"]`) != undefined;

// Don't add a play button if we're on a series root page
if (!isSeriesRoot()) {
  // Get media entry data
  const media = getMediaEntry(url);

  console.log(media);

  // Add a play button to the page
  parentDiv.insertBefore(
    domRender(<PlayButton href={media.videoUrl} />), shareButtonDiv);
}



