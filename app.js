


//variables

const body = document.querySelector("body");
const container = document.querySelector("#container");


//new elements

const items = document.createElement("div");
container.appendChild(items);
items.classList.add("items");


//styling

const bodyStyle = `
    background-image: url("Images/background.jpg");
    padding-top: 5%;
    padding-left: 15%;
`;
body.style.cssText = bodyStyle;


const containerStyle = `
    display: grid;
    width: 70vw;
    height: 90vh;
    background: white;
    border-radius: 3%;
    box-shadow: rgba(0, 0, 0, 0.4) 20px 30px 90px;
    border: #a5d5a5 1px solid;
`;
container.style.cssText = containerStyle;


const itemsStyle = `
    width: 250px;
    height: 250px;
    border: blue solid 4px;
`;
items.style.cssText = itemsStyle;
