import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Container, PostForm } from "../components";

function EditPost() {
  const [post, setPost] = useState(null);
  const navigate = useNavigate();
  const { slug } = useParams();

  const fetchPost = useCallback(async () => {
    if (slug) {
      const fetchedPost = await appwriteService.getPost(slug);
      if (fetchedPost) {
        setPost(fetchedPost);
      } else {
        navigate("/");
      }
    }
  }, [slug, navigate]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return (
    <div className="py-6">
      <Container>
        {post ? <PostForm post={post} /> : <p>Loading...........</p>}
      </Container>
    </div>
  );
}

export default EditPost;
