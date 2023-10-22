document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Pendaftaran berhasil, Anda dapat mengarahkan pengguna ke halaman login
            const user = userCredential.user;
            message.textContent = 'Pendaftaran berhasil!';
            setTimeout(function() {
                window.location.href = 'login.html'; // Ganti dengan halaman login yang sesuai
            }, 2000); // Mengarahkan setelah 2 detik
        })
        .catch((error) => {
            // Pendaftaran gagal, tampilkan pesan kesalahan
            const errorMessage = error.message;
            message.textContent = errorMessage;
        });
});
