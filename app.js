// variables

const body = document.querySelector("body");

const container = document.createElement("div");
body.appendChild(container);

const nav = document.createElement("div");
container.appendChild(nav);

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


// styling

const bodyStyle = `
    display: flex;
    justify-content: center;
    align-item: center;
    background-image: url("Images/background.jpg");
    background-size: cover;
    padding-top: 10px;
`;
body.style.cssText = bodyStyle;

const containerStyle = `
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 70vw;
    height: auto;
    padding: 0px 15px 15px 10px;
    background: white;
    border-radius: 3%;
    box-shadow: rgba(0, 0, 0, 0.4) 20px 30px 90px;
    border: #a5d5a5 1px solid;
`;
container.style.cssText = containerStyle;

const navStyle = `
    position: fixed;
    width: 70vw;
    height: 40px;
    border: red 4px solid;
    background: white;   /* needs to stay for wwhen scrolling */
`;
nav.style.cssText = navStyle;

const headerStyle = `
    grid-row: 1/2;
    width: 70vw;
    height: 50vh;
    border: green 4px solid;
    margin-bottom: 20px;
`;
header.style.cssText = headerStyle;

const itemContainerStyle = `
    grid-row: auto;
    display: flex;
    justify-content: space-around;
    width: 70vw;
    height: auto;
    padding-top: 20px;
    border: blue 4px solid;
`;
itemContainer.style.cssText = itemContainerStyle;

const itemStyle = `
    width: 250px;
    height: 250px;
    border-radius: 5%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;
item.style.cssText = itemStyle;

itemImgStyle = `
    width: 250px;
    height: 180px;
    background: pink;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`;
itemImg.style.cssText = itemImgStyle;

