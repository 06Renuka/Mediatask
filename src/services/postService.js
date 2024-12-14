import { collection, query, orderBy, limit, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebase";


export const fetchPosts = async () => {
  try {
    const postsCollection = collection(db, "posts");
    const postsQuery = query(postsCollection, orderBy("timestamp", "desc"), limit(20));
    const querySnapshot = await getDocs(postsQuery);

    const posts = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      // Safely parse media or default to an empty array
      const parsedMedia = Array.isArray(data?.content?.media)
        ? data.content.media
        : JSON.parse(data?.content?.media || "[]");

      posts.push({
        id: doc.id,
        ...data,
        content: {
          ...data.content,
          media: parsedMedia,
        },
      });
    });

    return posts;
  } catch (error) {
    console.error("Error fetching posts: ", error);
    throw error;
  }
};


// Create a new post
export const createPost = async (postData) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      ...postData,
      timestamp: new Date().toISOString()
    });
    console.log("Post created with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding post: ", error);
    throw error;
  }
};
