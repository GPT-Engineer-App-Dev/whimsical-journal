import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const addPost = async (newPost) => {
  const response = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error("Failed to add new post");
  }

  return response.json();
};

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
      toast("New post added successfully!");
      navigate("/blog");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      mutation.mutate({ title, content });
    } else {
      toast.error("Please fill out all fields");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Add New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full"
            rows="10"
          />
        </div>
        <Button type="submit" className="w-full">
          Add Post
        </Button>
      </form>
    </div>
  );
};

export default AddPost;