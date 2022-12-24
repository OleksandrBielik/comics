export interface Char {
  id: string;
  title: string;
  type: string;
  price?: number;
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
  type: string;
  price?: number;
  description: string;
  thumbnail: Thumbnail;
  creators?: any;
}

export interface Author {
  name: string;
  role: string;
}

export interface CartItem {
  id: string;
  title: string;
  type: string;
  price?: number;
  thumbnail: Thumbnail;
}
