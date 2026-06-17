console.log("Projects JS Loaded");

//import { getProjects }
//from "./modules/fetchProjects.mjs";

import { getProjects } 
from "./fetchProjects.mjs";

//import { displayProjects }
//from "./modules/displayProjects.mjs"

import { displayProjects } 
from "./displayProjects.mjs";

//import {
//    saveLastViewed,
//    getLastViewed
//}
//from "./modules/storage.mjs";

import { saveLastViewed, getLastViewed } 
from "./storage.mjs";

const container =
document.querySelector("#projects-container");

const modal =
document.querySelector("#project-modal");

const modalContent =
document.querySelector("#modal-content");

const closeModal =
document.querySelector("#close-modal");

let allProjects = [];

initialize();

async function initialize() {

    allProjects = await getProjects();

    displayProjects(allProjects, container);

    showLastViewed();

    addFilterEvents();

    addModalEvents();
}

function addFilterEvents() {

    const buttons =
    document.querySelectorAll(".filters button");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const category =
            button.dataset.category;

            if (category === "all") {

                displayProjects(
                    allProjects,
                    container
                );

            } else {

                const filtered =
                allProjects.filter(project =>
                    project.clientType
                    .toLowerCase()
                    .includes(category)
                );

                displayProjects(
                    filtered,
                    container
                );
            }

            addModalEvents();
        });
    });
}

function addModalEvents() {

    const buttons =
    document.querySelectorAll(".details-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const projectId =
            Number(button.dataset.id);

            const project =
            allProjects.find(item =>
                item.id === projectId
            );

            saveLastViewed(
                project.projectName
            );

            modalContent.innerHTML = `
                <h2>${project.projectName}</h2>

                <img src="${project.image}"
                     alt="${project.projectName}">

                <p><strong>Location:</strong>
                ${project.location}</p>

                <p><strong>Client Type:</strong>
                ${project.clientType}</p>

                <p><strong>Service:</strong>
                ${project.service}</p>

                <p><strong>Year:</strong>
                ${project.year}</p>

                <p>${project.description}</p>
            `;

            modal.showModal();
        });
    });
}

closeModal.addEventListener(
    "click",
    () => modal.close()
);

function showLastViewed() {

    const lastViewed =
    getLastViewed();

    if (!lastViewed) return;

    const message =
    document.createElement("p");

    message.textContent =
    `Last Viewed Project:
    ${lastViewed}`;

    container.before(message);
}