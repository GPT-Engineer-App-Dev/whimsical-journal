import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Blog = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="mb-4">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;