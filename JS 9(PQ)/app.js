PQ Class
let p = document.createElement("p");
p.innerText = "Hey I'm red!";
document.body.append(p);
p.classList.add("red");

let heading =document.createElement("h3");
heading.innerText = "I'm a blue h3!";
document.body.append(heading);
heading.classList.add("blue");


let div = document.createElement("div");
document.body.append(div);
div.classList.add("div");

let h1 =document.createElement("h1");
h1.innerText = "I'm in a div";
div.appendChild(h1);

let para =document.createElement("p");
para.innerText = "ME TOO";
div.appendChild(para);

let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me";

document.body.append(input);
document.body.append(btn);

// input.getAttribute("placeholder");
input.setAttribute("placeholder","username");

btn.setAttribute("id","btn");
document.querySelector("#btn");
btn.classList.add("btnStyle");


let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
document.body.prepend(h1);
h1.classList.add("h1");

let pl = document.createElement("p");
pl.innerHTML = "Apna College <b>Delta </b> Practice";
document.body.prepend(pl);