// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBy-vy6Vn0QoS7e1yhiu2mCjgDUeEfv2V4',
	authDomain: 'aura-b801a.firebaseapp.com',
	projectId: 'aura-b801a',
	storageBucket: 'aura-b801a.firebasestorage.app',
	messagingSenderId: '92809608918',
	appId: '1:92809608918:web:cc887f03a3689d55e59377',
	measurementId: 'G-LWJY33BRRE'
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup };
