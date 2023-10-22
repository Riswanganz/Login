document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login berhasil, Anda dapat mengarahkan pengguna ke halaman lain
            const user = userCredential.user;
            message.textContent = 'Login berhasil!';
        })
        .catch((error) => {
            // Login gagal, tampilkan pesan kesalahan
            const errorMessage = error.message;
            message.textContent = errorMessage;
        });
});
