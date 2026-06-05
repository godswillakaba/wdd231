const params = new URLSearchParams(window.location.search);

const firstName = params.get("firstName");
const lastName = params.get("lastName");
const email = params.get("email");
const phone = params.get("phone");
const organization = params.get("organization");
const timestamp = params.get("timestamp");

document.querySelector("#application-details").innerHTML = `
    <h3>Application Details</h3>

    <p><strong>First Name:</strong> ${firstName}</p>

    <p><strong>Last Name:</strong> ${lastName}</p>

    <p><strong>Email Address:</strong> ${email}</p>

    <p><strong>Mobile Phone:</strong> ${phone}</p>

    <p><strong>Business / Organization:</strong> ${organization}</p>

    <p><strong>Date Submitted:</strong> ${timestamp}</p>
`;