document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);

    const fname = params.get("fname");
    const lname = params.get("lname");
    const email = params.get("email");
    const phone = params.get("phone");
    const organization = params.get("organization");
    const level = params.get("level");
    const description = params.get("description");
    const timestamp = params.get("timestamp") || new Date().toLocaleString();

    document.querySelector("#user-info").innerHTML = `
        <h2>Your Membership Details</h2>
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business/Organization Name:</strong> ${organization}</p>
        <p><strong>Membership Level:</strong> ${level}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Submission Date:</strong> ${timestamp}</p>
    `;
});
