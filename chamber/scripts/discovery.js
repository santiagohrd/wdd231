const linkURL = 'https://santiagohrd.github.io/wdd231/chamber/data/interest.json';
const container = document.querySelector('.discover-card');

async function getInterestData(){
    const response = await fetch(linkURL);
    const data = await response.json();
    displayInfo(data.interest);
};

getInterestData();

function displayInfo(data) {
    data.forEach(interest => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let figure = document.createElement("figure");
        let photo = document.createElement("img");
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        card.className = 'interest-container';

        name.textContent = `${interest.name}`;
        address.textContent = `${interest.address}`;
        description.textContent = `${interest.description}`;
        button.textContent = `learn more`;

        photo.setAttribute("src", interest.image);
        photo.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(figure);
        figure.appendChild(photo);
        card.appendChild(address);
        card.appendChild(description)
        card.appendChild(button);
        container.appendChild(card);
    });
}