//
//

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCBar2klfoVCqKxXsEDriiOXRgYyS4S_DY',
  authDomain: 'tinder-clone-react-605a1.firebaseapp.com',
  databaseURL: 'https://tinder-clone-react-605a1.firebaseio.com',
  projectId: 'tinder-clone-react-605a1',
  storageBucket: 'tinder-clone-react-605a1.appspot.com',
  messagingSenderId: '935248428177',
  appId: '1:935248428177:web:83e0639c6ccbe09a111330',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
