
// globals

const body = document.querySelector("body");

const container = document.createElement("div");
body.appendChild(container);

const header = document.createElement("div");
container.appendChild(header);

const nav = document.createElement("div");
header.appendChild(nav);

const navContent = document.getElementById("navContent");
nav.appendChild(navContent);

// const navIcons = document.getElementById("icons");
// nav.appendChild(navIcons);

const itemContainer = document.createElement("div");
container.appendChild(itemContainer);

const item = document.createElement("div");
itemContainer.appendChild(item);

const itemImg = document.createElement("div");
item.appendChild(itemImg);

const itemText = document.createElement("div");
item.appendChild(itemText);

const products = [
    {
        id: 0,
        
    },
    {
        id: 1,
      
    },
    {
        id: 2,
        
    },
    {
        id: 3,
     
    },
    {
        id: 4,
       
    },
    {
        id: 5,
        
    }
]; 


// this makes the objects appear
let itemBox = []

for (let i = 0; i < products.length; i++) {
    itemBox += products[i];
    itemContainer.innerHTML = itemBox.style.cssText = itemStyle;
  }

  

