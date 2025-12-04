import {
  createImageUrlBuilder,
  ImageUrlBuilder,
  SanityImageSource,
} from "@sanity/image-url";
import { client } from "./client";

const { projectId, dataset } = client.config();

export function imageUrlBuilder(
  source: SanityImageSource,
): ImageUrlBuilder | null {
  return projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;
}
