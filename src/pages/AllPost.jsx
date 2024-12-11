import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/PostCard";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const posts = await appwriteService.getPosts([]);
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap">
            {posts.length !== 0 ? (
              posts.map((post) => (
                <div key={post.$id} className="p2 w-1/4 ">
                  <PostCard {...post} />
                </div>
              ))
            ) : (
              <h2> No Post Found</h2>
            )}
          </div>
        )}
      </Container>
    </div>
  );
}

export default AllPost;
