export function getSpotlights(members) {

    // Filter only Silver (2) and Gold (3)
    const qualifiedMembers = members.filter(member =>
        member.membershipLevel === 2 ||
        member.membershipLevel === 3
    );

    // Shuffle randomly
    qualifiedMembers.sort(() => Math.random() - 0.5);

    // Select 3 random members
    return qualifiedMembers.slice(0, 3);
}