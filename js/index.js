function sendMail(event) { 
    event.preventDefault(); // Prevent form from refreshing the page

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let isvalid = true;

    // Clear previous error messages
    document.getElementById('errname').textContent = "";
    document.getElementById('erremail').textContent = "";
    document.getElementById('errsubject').textContent = "";
    document.getElementById('errmessage').textContent = "";

    if (!name) {
        document.getElementById('errname').textContent = "Please enter your name";
        isvalid = false;
    }
    if (!email) {
        document.getElementById("erremail").textContent = "Please enter your email";
        isvalid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById("erremail").textContent = "Please enter a valid email";
        isvalid = false;
    }
    if (!subject) {
        document.getElementById("errsubject").textContent = "Please enter your subject";
        isvalid = false;
    }
    if (!message) {
        document.getElementById("errmessage").textContent = "Please enter your message";
        isvalid = false;
    }

    if (!isvalid) {
        return; // Stop execution if form is invalid
    }

    var params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
    };

    emailjs
    .send("service_w0sxbay", "template_mligk64", params)
    .then(() => {
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset();
    })
    .catch((error) => {
        alert("Error sending email");
        console.error("Error: " + error.message);
    }); 
}
