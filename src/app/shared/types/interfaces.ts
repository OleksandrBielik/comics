export interface Char {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics?: { name: string }[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comic {
  id: string;
  title: string;
  description: string;
  thumbnail: Thumbnail;
  series?: { name: string }[];
}
