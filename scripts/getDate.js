const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
};

const newDate = new Date(document.lastModified).toLocaleDateString("en-UK", options);
document.querySelector('#lastModified').innerHTML = `Last modification: ${newDate}`;

const currentYear = new Date().getFullYear();

document.querySelector('#copyright').innerHTML = `&copy;${currentYear} `;