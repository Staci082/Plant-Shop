
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70vw;
    height: 40px;
    margin-top: 10px;
    border-radius: 27%;
    background: white;   /* needs to stay for when scrolling */
`;
nav.style.cssText = navStyle;

const navContentStyle = `
    list-style: none;
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    color: grey;
`;
navContent.style.cssText = navContentStyle;


const headerStyle = `
    grid-row: 1/2;
    width: 70vw;
    height: 50vh;
    border : green 4px solid;
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

const itemImgStyle = `
    width: 250px;
    height: 180px;
    background: pink;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
`;
itemImg.style.cssText = itemImgStyle;

