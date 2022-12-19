export interface Char {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics?: Comic[];
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comic {
  name: string;
}
