import { ReactNode, useEffect, useState } from "react";
import BlogPosts, { type BlogPost } from "./components/BlogPosts";
import { get } from "./utils/http";
import ImageBlog from './assets/data-fetching.png';
import ErrorMessage from "./components/ErrorMessage";

type RawBlogPost = {
  id: number,
  title: string,
  body: string,
  userId: number
}

function App() {
  const [posts, setPosts] = useState<BlogPost[]>();
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);
      try {
        const data = (await get<RawBlogPost[]>('https://jsonplaceholder.typicode.com/posts'));

        const blogPosts: BlogPost[] = data.map(({ id, title, body }) => ({
          id: id,
          title: title,
          text: body,
        }));

        setPosts(blogPosts);

      } catch (error) {
        if (error instanceof Error) {
          setError(error.message)
        }
      }

      setIsFetching(false);
    }

    fetchPost();
  }, []);

  let content: ReactNode;

  if (error) {
    content = <ErrorMessage text={error} />
  }
  if (posts) {
    content = <BlogPosts posts={posts} />
  }
  if (isFetching) {
    content = <p id="loading-fallback">Fetching posts...</p>
  }

  return <main>
    <h1>Data Fetching!</h1>
    <img src={ImageBlog} alt="Abstract imaage" />
    {content}
  </main>;
}

export default App;
