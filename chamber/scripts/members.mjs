export async function getMembers() {
    const response = await fetch("/wdd231/data/members.json");
    
    if (!response.ok) {
        throw new Error("Failed to load members data");
    }

    const data = await response.json();
    return data;
}