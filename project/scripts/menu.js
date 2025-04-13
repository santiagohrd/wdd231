const nav = document.querySelector('#nav');
const openbtn = document.querySelector('#open');
const closebtn = document.querySelector('#close');

openbtn.addEventListener("click", () => {
  nav.classList.add("visible");
  openbtn.style.display = "none";
});

closebtn.addEventListener("click", () => {
  nav.classList.remove("visible");
  openbtn.style.display = "block"; 
})