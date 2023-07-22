// #1
const container_ById = document.getElementById("container");

// #2
const container_Query = document.querySelector("#container");

// #3
const second = document.getElementsByClassName("second");

// #4
const third = document.querySelector("ol .third");

// #5
container_ById.append("Hello!");

// #6
const main_1 = document.querySelector(".footer");
main_1.classList.add("main");

// #7
const main_2 = document.querySelector(".footer");
main_2.classList.remove("main");

// #8
const newLi = document.createElement("li");

// #9
newLi.innerText = "four"

// #10
const ul = document.querySelector("ul");
ul.appendChild(newLi);

// #11
const LiInsideOl =  document.querySelectorAll("ol li");

for (let lis of LiInsideOl) {
    lis.style.backgroundColor = "green";
};

// #12
const footer = document.querySelector(".footer");
footer.remove();


