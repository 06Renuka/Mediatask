import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "../services/firebase";
import { useSwipeable } from "react-swipeable"; // Import swipeable hook
import { db } from "../services/firebase"; // Adjust the path to your firebase.js


const Mypsosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const user = auth.currentUser;
  const userId = user?.uid || "unknown_user"; // Replace with authenticated user ID (e.g., from Firebase Auth)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, "posts");
        const q = query(postsRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        const fetchedPosts = [];
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [userId]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.media.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? posts.media.length - 1 : prevIndex - 1
    );
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className=" relative m-10">
      <div className="flex flex-col items-center w-full">
        {/* Profile Header and Other Components */}

        {/* My Posts */}
        <div className="w-full mt-6 px-4">
          <h2 className="text-lg font-semibold mb-4 ">My Posts</h2>
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  {/* <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                  /> */}
                  {/* <div>
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
                  </div> */}

                  <div
                    {...handlers}
                    className="relative flex justify-center items-center w-60 h-60 mb-4 overflow-hidden"
                  >
                    {post.media.length > 0 && (
                      <div className="absolute top-2 right-2 bg-black text-white rounded-full px-3 py-1 text-sm z-20">
                        {`${currentIndex + 1}/${post.media.length}`}
                      </div>
                    )}
                    
                    {/* Image display */}
                    {Array.isArray(post.media) && post.media.length > 0 ? (
                      post.media.map((url, index) => (
                        <img
                          key={index}
                          src={url}
                          alt={`Post content ${index + 1}`}
                          className={`absolute w-full h-full object-cover rounded shadow transition-opacity duration-300 ${currentIndex === index ? "opacity-100" : "opacity-0"
                            }`}
                        />
                      ))
                    ) : (
                      <p className="text-gray-500">Media not available</p>
                    )}



                  </div>
                  {/* <div  className="relative flex justify-center items-center w-60 h-60 mb-4">
                  {...handlers}
                  {post.media.length > 0 && (
                      <div className="absolute top-2 right-2 bg-black text-white rounded-full px-3 py-1 text-sm z-20">
                        {`${currentIndex + 1}/${post.media.length}`} 
                      </div>
                    )}

                  
                    {Array.isArray(post.media) && post.media.length > 0 ? (
                      <div
                        className={`${post.media.length === 1
                          ? "flex justify-center items-center"
                          : "flex flex-wrap gap-3"
                          }`}
                      >
                        {post.media.map((url, index) => (
                          <img
                            key={index}
                            src={url}
                            alt={`Post content ${index + 1}`}
                            className={`absolute w-full h-full object-cover rounded shadow transition-opacity duration-300 ${currentIndex === index ? "opacity-100" : "opacity-0"
                              }`}
                           
                          />
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">Media not available</p>
                    )}

                    
                  </div> */}
                  {/* <div>
                    {Array.isArray(post.media) && post.media.length > 0 ? (
                      post.media.map((url, index) => (
                        <img
                          key={index}

                          src={url}
                          alt={`Post content ${url}`}
                          className="w-full mb-3 rounded-lg shadow-md object-cover"
                        />
                      ))
                    ) : (
                      <p className="text-gray-500">Media not available</p>
                    )}
                  </div> */}
                  <div className="p-4">
                    <h3 className="text-md font-medium">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.likes}likes</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No posts yet.</p>
          )}
        </div>


      </div>
    </div>
  );
};

export default Mypsosts;
