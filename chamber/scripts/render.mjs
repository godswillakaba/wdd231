export function displaySpotlights(members) {

    const container = document.querySelector("#spotlight-container");

    // Clear existing content
    container.innerHTML = "";

    members.forEach(member => {

        // Create card
        const card = document.createElement("section");
        card.classList.add("spotlight-card");

        // Convert membership number to text
        let membershipName = "";

        if (member.membershipLevel === 3) {
            membershipName = "Gold Member";
        } else if (member.membershipLevel === 2) {
            membershipName = "Silver Member";
        }

        // Build card content
        card.innerHTML = `
        <h3>${member.companyName}</h3>


        <div class="spotlight-content">


            <img src="images/${member.image}" alt="${member.companyName} logo">

            <div class="spotlight-info">
                <p>${membershipName}</p>
                <p>${member.phoneNumber}</p>
                <p>${member.address}</p>

                <a href="${member.websiteURL}" target="_blank">
                 Visit Website
                </a>
            </div>
        </div>
        `;

        // Add card to page
        container.appendChild(card);
    });
}