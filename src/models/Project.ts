import type { ImageResponse, Person, Category } from "@/models"

export interface Project {
  id: number;
  image?: ImageResponse;
  publishedAt: Date;
  slug: string;
  title: string;
  popular: boolean;
  authors?: Person[];
  repositoryURL?: string;
  categories?: Category[]
  excerpt: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}
