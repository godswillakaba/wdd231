const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");
const directory = document.querySelector("#directory");




const url = "/wdd231/data/members.json";

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const container = document.querySelector("#directory");

    data.forEach(company => {

        const card = document.createElement("section");
        card.classList.add("card");

        const image = document.createElement("img");
        image.src = `images/${company.image}`;
        image.alt = company.companyName;
        image.width = 200;
        image.loading = "lazy";
        image.decoding = "async";


        const name = document.createElement("h2");
        name.textContent = company.companyName;

        const address = document.createElement("p");
        address.textContent = company.address;

        const telephone = document.createElement("a");
        telephone.textContent = company.phoneNumber;
        telephone.href = `tel:${company.phoneNumber}`;

        const website = document.createElement("a");
        website.textContent = "Visit Website";
        website.href = company.websiteURL;
        website.target = "_blank";

    
        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(telephone);
        card.appendChild(document.createElement("br"));
        card.appendChild(website)

        container.appendChild(card);

        console.log(company.companyName);
        console.log(company.address);
        console.log(company.image);
    });
}

getMembers();


gridBtn.addEventListener("click", () => {
    directory.classList.add("grid");
    directory.classList.remove("list");    
});

listBtn.addEventListener("click", () => {
    directory.classList.add("list");
    directory.classList.remove("grid");
    
});

