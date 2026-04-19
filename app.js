const firebaseConfig = {
    apiKey: "AIzaSyC5qRRx02nl2HXirSCniDhf7mPx0mW8RyE",
    authDomain: "eeechat-1289d.firebaseapp.com",
    projectId: "eeechat-1289d",
    storageBucket: "eeechat-1289d.firebasestorage.app",
    messagingSenderId: "88867733137",
    appId: "1:88867733137:web:1cac774fb5ddad769c930"
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const ui = document.getElementById('auth-ui');
ui.innerHTML = `<button class="btn-google" onclick="login()"><img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/action/google.svg" width="18"> Google ile Giriş</button>`;

window.login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
};

firebase.auth().getRedirectResult().then(res => {
    if (res.user) alert("Hoş geldin " + res.user.displayName);
});
