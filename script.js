"use strict";
const image = document.querySelector("img");
const fullName = document.querySelector(".name");
const job = document.querySelector(".job");
const description = document.querySelector(".description");
const arrows = document.querySelectorAll(".arrow");
const arrowLeft = arrows[0];
const arrowRight = arrows[1];
const button = document.querySelector(".btn");
let i = fullName.getAttribute("number");
let lastRandom = 0;

// data
const user1 = {
  image: "profil-1",
  fullName: "Bill Anderson",
  job: "THE BOSS",
  description:
    "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
};
const user2 = {
  image: "profil-2",
  fullName: "Susan Smith",
  job: "WEB DEVELOPER",
  description:
    "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
};
const user3 = {
  image: "profil-3",
  fullName: "Jhon Johnson",
  job: "WEB DESIGNER",
  description:
    "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
};
const users = [user1, user2, user3];
//display data in DOM
function displayData(user) {
  image.src = `images/${user.image}.jpg`;
  fullName.textContent = user.fullName;
  job.textContent = user.job;
  description.textContent = user.description;
  fullName.setAttribute("number", `${user.image.slice(-1)}`);
}
// right click functionnality
arrowRight.addEventListener("click", () => {
  i++;
  i === 3 ? (i = 0) : "";
  displayData(users[i]);
});
// left click functionnality
arrowLeft.addEventListener("click", () => {
  i === 0 ? (i = 3) : "";
  i--;
  displayData(users[i]);
});
// display random user
button.addEventListener("click", function (e) {
  e.preventDefault();
  displayData(users[random()]);
});
// unique random number
function random() {
  let r = Math.trunc(Math.random() * 3);
  lastRandom !== r ? (lastRandom = r) : (r = random());
  return r;
}
