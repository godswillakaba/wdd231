const params =
new URLSearchParams(
    window.location.search
);

document.querySelector("#fullname")
.textContent =
params.get("fullname");

document.querySelector("#email")
.textContent =
params.get("email");

document.querySelector("#phone")
.textContent =
params.get("phone");

document.querySelector("#property-type")
.textContent =
params.get("property-type");

document.querySelector("#service")
.textContent =
params.get("service");

document.querySelector("#budget")
.textContent =
params.get("budget");

document.querySelector("#project-location")
.textContent =
params.get("project-location");

document.querySelector("#description")
.textContent =
params.get("description");