export function saveLastViewed(projectName) {
    localStorage.setItem("lastViewedProject", projectName);
}

export function getLastViewed() {
    return localStorage.getItem("lastViewedProject");
}