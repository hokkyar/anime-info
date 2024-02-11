export interface Anime {
  mal_id: number;
  rank: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    }
  };
  type: string;
  score: number;
  episodes: number;
  members: number;
  genres: { name: string }[];
  status: string;
}
