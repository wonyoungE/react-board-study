import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// 리액트 앱에서는 process.env
// VITE에서는 import.meta.env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// 다른 데서 불러다가 쓸 거기 때문에 export
export const storage = getStorage(app);
