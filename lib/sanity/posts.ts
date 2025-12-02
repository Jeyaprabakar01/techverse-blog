import { Post } from "@/types/posts";
import { client } from "./client";

const POSTS_QUERY = `*[_type == "post"] | order(postedDate desc)`;
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };


export async function getPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await client.fetch<Post>(POST_QUERY, { slug }, options);
    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}