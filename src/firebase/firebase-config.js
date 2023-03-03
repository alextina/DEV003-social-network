import { initializeApp } from 'firebase/app';

const firebaseConfig = {

  apiKey: 'AIzaSyCTPEOI4fKvCdU7NdtAawxMK7jyd6kixs8',
  authDomain: 'fems-social-network-23.firebaseapp.com',
  projectId: 'fems-social-network-23',
  storageBucket: 'fems-social-network-23.appspot.com',
  messagingSenderId: '872829994370',
  appId: '1:872829994370:web:4d77a6fbf2f803a02ffb9b',

};

// Inicicializando Firebase
export const app = initializeApp(firebaseConfig);
