const linksURL = 'https://santiagohrd.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('.spot-info');

async function getMembersData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displaySpotlights(data.Companies);
}

function getRandomCompanies(companies, count = 3) {
    
    let filteredCompanies = companies.filter(company => 
        company.membership === "Gold" || company.membership === "Silver"
    );

    let shuffled = companies.sort(() => 0.5 - Math.random()).slice(0, count);
        
    return shuffled;
}

function displaySpotlights(companies) {
    cards.innerHTML = '';
    let selectedCompanies = getRandomCompanies(companies);

    selectedCompanies.forEach((business) => {
        let card = document.createElement("div");
        let name = document.createElement("h4");
        let logo = document.createElement("img");
        let membership = document.createElement("p");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let web = document.createElement("a");

        card.className = 'spot-card';
        membership.className = 'membership';
        phone.className = "business-data";
        address.className = "business-data";
        web.className = "business-data";
        
        name.textContent = business.name;
        membership.textContent = business.membership_level;
        phone.textContent = `PHONE: ${business.phone_number}`;
        web.textContent = business.website;
        address.textContent = `ADDRESS: ${business.address}`;

        web.setAttribute("href", business.website);
        web.setAttribute("target", "_blank");

        logo.setAttribute("src", business.image);
        logo.setAttribute("alt", `Logo of ${business.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("height", "75");

        card.appendChild(name);
        card.appendChild(membership);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(web);
        
        cards.appendChild(card);
    });
}

getMembersData();
