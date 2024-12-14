
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
//import { storage } from '../services/firebase';  

const fetchFileUrl = async (filePath) => {
  const storageInstance = getStorage(); // Get the storage instance
  const storageRef = ref(storageInstance, filePath); 

  try {
    // Get the download URL for the file
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error fetching file URL:", error);
    throw error;
  }
};
export default fetchFileUrl;
