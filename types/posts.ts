import { SanityImageSource } from "@sanity/image-url";
import { type SanityDocument } from "next-sanity";

export interface Post extends SanityDocument {
  title: string;
  slug: {
    current: string;
  };
  category: string;
  postedDate: string;
  thumbnail?: SanityImageSource & {
    alt?: string;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[];
}