import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";

function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) {
          setPost(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  const deletePost = async () => {
    await appwriteService.deletePost(post.$id).then(async (status) => {
      if (status) {
        await appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="relative w-full mb-4 border rounded-xl overflow-hidden">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="w-full object-cover aspect-[16/4]"
          />
          {isAuthor && (
            <div className="absolute top-4 right-4 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button className="mr-3" bgColor="bg-green-500">
                  Edit
                </Button>
              </Link>
              <Button onClick={deletePost} bgColor="bg-red-500">
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="browser-css">{parse(post.content)}</div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post;
