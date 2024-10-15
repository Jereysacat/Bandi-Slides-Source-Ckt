function login() {
    const passwordInput = document.getElementById("password").value;
    const feedbackElement = document.getElementById("feedback"); // Reference to feedback element

    // Replace 'your-password' with the actual password you want to use
    if (passwordInput === '20242027') {
        feedbackElement.textContent = "Login successful! Redirecting...";
        setTimeout(() => {
            window.location.href = 'folders.html'; // Redirect to folders page
        }, 1000); // Delay for 1 second
    } else {
        feedbackElement.textContent = "Incorrect password. Please try again."; // Feedback on incorrect password
    }
}

function logout() {
    window.location.href = 'index.html'; // Redirect to login page
}