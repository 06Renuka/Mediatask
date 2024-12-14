import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/postService";
import { CiHeart } from "react-icons/ci";
import ShareButton from "./ShareButton";



const PostList = ({ onShareClick }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(onShareClick);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchPosts();
        console.log("result", fetchedPosts)

        setPosts(fetchedPosts);

      } catch (error) {
        console.error("Error loading posts: ", error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  console.log("content", posts)



  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center gap-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-sm"
        >
          {/* User Info */}
          <div className="flex items-center gap-3 mb-3">
            <img
              src={post.profilePicture}
              alt={`${post.username}'s profile`}
              className="w-10 h-10 rounded-full"
            />
            <h3 className="text-lg font-semibold">{post.username}</h3>
          </div>


          {/* Post Text */}
          <p className="mb-3 text-gray-700">{post.text}</p>
          <div>
            {Array.isArray(post.media) && post.media.length > 0 ? (
              <div
                className={`${post.media.length === 1 ? "flex justify-center items-center" : "flex flex-wrap gap-3"
                  }`}
              >
                {post.media.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Post content ${url}`}
                    className="w-40 h-40 mb-3 rounded-lg shadow-md object-contain"
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Media not available</p>
            )}
          </div>
          {/* Likes and Actions */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <CiHeart size={20} />
              <p>{post.likes}</p>
            </div>
            {/* <ShareButton postId={post.id} /> */}
            <ShareButton onShareClick={onShareClick} shareUrl={post.shareUrl} />



          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
