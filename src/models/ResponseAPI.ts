export interface ResponseAPI<T> {
  data?: T;
  meta: MetaRespose;
}

export interface MetaRespose {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}

export interface ImageResponse {
  data: ImageData;
}

export interface ImageData {
  attributes: DataImageAttributes;
  id: number;
}

export interface DataImageAttributes {
  alternativeText: null;
  caption: null;
  createdAt: Date;
  ext: string;
  formats: ImageFormats;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updatedAt: Date;
  url: string;
  width: number;
}

export interface ImageFormats {
  large: ImageFormatAttributes;
  medium: ImageFormatAttributes;
  small: ImageFormatAttributes;
  thumbnail: ImageFormatAttributes;
}

export interface ImageFormatAttributes {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
}
