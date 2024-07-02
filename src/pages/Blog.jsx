import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const fetchPosts = async () => {
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const deletePost = async (postId) => {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete post");
  }

  return response.json();
};

const Blog = () => {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      toast("Post deleted successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleDelete = (postId) => {
    mutation.mutate(postId);
  };

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
          <Button variant="destructive" onClick={() => handleDelete(post.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;