export async function getProjects() {
    try {
        const response = await fetch("data/projects.json");

        if (!response.ok) {
            throw new Error("Unable to fetch project data.");
        }

        const projects = await response.json();

        return projects;

    } catch (error) {
        console.error("Fetch Error:", error);
        return [];
    }
}