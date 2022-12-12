export interface Comic {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
