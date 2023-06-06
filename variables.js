
// globals



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
  }

  

