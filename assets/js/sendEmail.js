function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_wlmg02a", "template_irir9wg", params).then(function (res) {
        swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully!",
        });
    });
}