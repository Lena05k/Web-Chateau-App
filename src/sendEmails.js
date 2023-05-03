import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDiupvsZ9vfR-AWW_eviiQMBT8LioBu36w',
  authDomain: 'chateau-ef4aa.firebaseapp.com',
  databaseURL: 'https://chateau-ef4aa-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chateau-ef4aa',
  storageBucket: 'chateau-ef4aa.appspot.com',
  messagingSenderId: '1003017239418',
  appId: '1:1003017239418:web:9c11fa7a904685b928f4c3',
  measurementId: 'G-ET2TT4P00J',
};

const add = initializeApp(firebaseConfig);

export default add;

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
//
// const formEmail = document.getElementById('formEmail');
// const btn = document.getElementById('button-email');
//
// const handle = (e) => {
//   e.preventDefault();
//
//   const email = document.getElementById('email').value;
//   const userId = push(child(ref(database), 'users')).key;
//
//   set(ref(database,'users/' + userId), {
//     email: email,
//   }).then(() => {
//     formEmail.reset();
//   }).catch(err => {
//     console.log(err);
//   });
// };
//
// btn.addEventListener('click', handle);
