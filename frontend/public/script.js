async function registerUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (!name || !email || !password) {
        message.textContent = "All fields are required";
        message.style.color = "red";
        return;
    }

    const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
        message.textContent = "Registration successful!";
        message.style.color = "green";
    } else {
        message.textContent = data.error;
        message.style.color = "red";
    }
}
