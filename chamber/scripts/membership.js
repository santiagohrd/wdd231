const memberships = [
    {
        level: 'Gold',
        price: '30',
        benefits: [
            'Business consulting',
            'Data and Resources',
            'Trainings',
            'Event discounts',
            'Entrepreneur Networking',
            'Legal advice'
        ]
    },
    {
        level: 'Silver',
        price: '20',
        benefits: [
            'Business consulting',
            'Data and Resources',
            'Trainings',
            'Event discounts',
            'Entrepreneur Networking'
        ]
    },
    {
        level: 'Bronze',
        price: '10',
        benefits: [
            'Business consulting',
            'Data and Resources',
            'Trainings'
        ]
    },
    {
        level: 'Non Profit',
        price: 'Free',
        benefits: [
            'Business consulting'
        ]
    }
];

const membershipContainer = document.querySelector(".membership-list");
const membershipDetails = document.querySelector('#membership-details');


function displayMemberships(membreshipList) {
    membershipContainer.innerHTML = "";

    let memberList = document.createElement('h3');
    memberList.textContent = `Membership Levels`;
    membershipContainer.appendChild(memberList);

    membreshipList.forEach(level => {
        let card = document.createElement("div");
        card.className = "membership-level";

        let title = document.createElement('h4');
        let bntMembership = document.createElement('button');

        title.textContent = `${level.level} Membership Level`;
        bntMembership.innerHTML = `Learn more`;

        

        membershipContainer.appendChild(card);
        card.append(title);
        card.append(bntMembership);

        card.addEventListener('click', () => {
            displayMembershipDetail(level);
        });
    });
}

function displayMembershipDetail(memberships) {
    let benefitsList = `<ul>`;
    memberships.benefits.forEach(benefit => {
        benefitsList += `<li>${benefit}</li>`;
    });
    benefitsList += `</ul>`;

    membershipDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${memberships.level} $${memberships.price}</h2>
        ${benefitsList} 
    `;

    membershipDetails.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        membershipDetails.close();
    });
}

displayMemberships(memberships);