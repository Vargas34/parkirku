import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {



};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const storage = getStorage(app);
