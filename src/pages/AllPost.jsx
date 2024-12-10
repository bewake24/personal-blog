import React, { useState, useEffect } from "react";
import appwriteservice from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteservice.getPosts([]).then((posts) => {
      if (posts) {
        console.log(posts);
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8">
        <Container>
          <div className="flex flex-wrap">
            <h2> Login to read posts</h2>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p2 w-1/4 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
