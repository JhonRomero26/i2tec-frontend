import type { ImageResponse, Person } from "@/models"

export interface Project {
  attributes: ProjectAttributes;
  id: number;
}

export interface ProjectAttributes {
  createdAt: Date;
  image?: ImageResponse;
  publishedAt: Date;
  slug: string;
  title: string;
  popular: boolean;
  authors?: { data: Person[] };
  repositoryURL?: string;
  description: string;
  updatedAt: Date;
}
