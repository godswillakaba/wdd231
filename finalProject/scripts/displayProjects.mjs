export function displayProjects(projects, container) {

    container.innerHTML = "";

    projects.forEach(project => {

        const card = document.createElement("article");

        card.classList.add("project-card");

        card.innerHTML = `
            <img src="${project.image}"
                 alt="${project.projectName}"
                 loading="lazy">
            <h3>${project.projectName}</h3>
            <p><strong>Location:</strong> ${project.location}</p>
            <p><strong>Client:</strong> ${project.clientType}</p>
            <p><strong>Year:</strong> ${project.year}</p>
            <p>${project.description}</p>

            <button class="details-btn"
                data-id="${project.id}">
                View Details
            </button>
        `;

        container.appendChild(card);
    });
}