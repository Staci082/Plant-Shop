const body = document.querySelector("body");

const container = document.createElement("div");
body.appendChild(container);

const nav = document.createElement("div");
container.appendChild(nav);

const navContent = document.getElementById("navContent");
nav.appendChild(navContent);

const header = document.createElement("div");
container.appendChild(header);

const itemContainer = document.createElement("div");
container.appendChild(itemContainer);

const item = document.createElement("div");
itemContainer.appendChild(item);

const itemImg = document.createElement("div");
item.appendChild(itemImg);

const itemText = document.createElement("div");
item.appendChild(itemText);

