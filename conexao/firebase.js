const firebaseConfig = {
  apiKey: "AIzaSyDTH-DPJ3lVVzCpuXRJZVpTZT_4ySAfspA",
  authDomain: "teste-9f09d.firebaseapp.com",
  databaseURL: "https://teste-9f09d.firebaseio.com",
  projectId: "teste-9f09d",
  storageBucket: "teste-9f09d.appspot.com",
  messagingSenderId: "438572129305",
  appId: "1:438572129305:web:0d6f7728fe1f6f4f391e88",
  measurementId: "G-03VW6S07SY"
}

const firebase = require('firebase')

firebase.initializeApp(firebaseConfig)

module.exports = firebase

