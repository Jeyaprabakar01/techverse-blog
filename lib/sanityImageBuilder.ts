import { client } from "@/sanity/client";
import { createImageUrlBuilder, ImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

const { projectId, dataset } = client.config();

export function sanityImageBuilder(source: SanityImageSource): ImageUrlBuilder | null{
   return projectId && dataset ? createImageUrlBuilder({ projectId, dataset }).image(source) : null;    
}