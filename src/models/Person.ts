import type { ImageResponse, Account, Project, Title } from "@/models"

export interface Person {
  attributes: PersonAttributes;
  id: number;
}

export interface PersonAttributes {
  account?: Account;
  avatar?: ImageResponse;
  createdAt: Date;
  first_name: string;
  founder: boolean;
  last_name: string;
  projects?: Project[];
  teacher: boolean,
  prefix_titles?: { data: Title[] },
  suffix_titles?: { data: Title[] },
  publishedAt: Date;
  updatedAt: Date;
}