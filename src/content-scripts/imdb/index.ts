export type IMDbId = string;

export type MediaEntry = {
  id: IMDbId;
  videoUrl: string;
  isSeries: boolean;

  // series related
  season?: number;
  episode?: number;
};

export function getMediaEntry(url: string): MediaEntry {
  const data: Partial<MediaEntry> = { };
  const episodeNumbersParent = document.querySelector(`[data-testid="hero-subnav-bar-season-episode-numbers-section"]`);

  data.isSeries = episodeNumbersParent != undefined;
  data.id = parseId(data.isSeries ? getSeriesParentUrl() : url);

  if (!data.isSeries) {
    data.videoUrl = getMovieUrl(data.id!);
    return data as MediaEntry;
  }

  const episodeNumbers = (episodeNumbersParent!.querySelectorAll(`.ipc-inline-list__item`));
  const parsed = [];

  for (let i = 0; i < episodeNumbers.length; i++) {
    parsed[i] = episodeNumbers[i].children[0]!.innerHTML.replace(/\D/g,'');
  }

  data.season = parseInt(parsed[0], 10);
  data.episode = parseInt(parsed[1], 10);
  data.videoUrl = getSeriesUrl(data.id!, data.season, data.episode);

  return data as MediaEntry;
}

const getSeriesParentUrl = () => {
  const parentLink = document.querySelector(`[data-testid="hero-title-block__series-link"]`) as HTMLAnchorElement;
  return parentLink.href;
}

const parseId = (url: string): IMDbId => {
  const regex = /title\/(.*)\//
  return (url.match(regex)?.[1]) ?? "";
};

const isSeriesRoot = () => document.querySelector(`[data-testid="hero-subnav-bar-series-episode-guide-link"]`) != undefined;

const getMovieUrl = (id: IMDbId) => {
  return`https://vidsrc.me/embed/${id}`;
}

const getSeriesUrl = (id: IMDbId, se: number, ep: number) => {
  return`https://vidsrc.me/embed/${id}/${se}-${ep}`;
}
