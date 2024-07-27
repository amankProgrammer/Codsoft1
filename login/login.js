// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyB72a2pXFAqYB7v2VZXyOk_jDnlGRt85Bw",
    authDomain: "login-with-firebase-b3927.firebaseapp.com",
    projectId: "login-with-firebase-b3927",
    storageBucket: "login-with-firebase-b3927.appspot.com",
    messagingSenderId: "751118357094",
    appId: "1:751118357094:web:37082fd8de88af99a753a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//submit
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()

    //inputs
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("login successfull...")
            window.location.href = "landingPage.html"
            // ... 
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})
