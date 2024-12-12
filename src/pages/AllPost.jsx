import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/postSlice";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const posts = await appwriteService.getPosts([]);

      if (posts) {
        dispatch(addPost(posts.documents));
        setPosts(posts.documents);
      }
      setLoading(false);
    })();
  }, []);

  const postsInStore = useSelector((state) => state.posts);

  console.log(postsInStore);

  return (
    <div className="w-full py-8">
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap">
            {posts.length !== 0 ? (
              posts.map((post) => (
                <div key={post.$id} className="p-2 w-1/4 ">
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
