

const containerStyle = `
    display: grid;
    grid-template-rows: auto;
    width: 70vw;
    height: auto;
    padding: 0px 15px 15px 10px;

`;
container.style.cssText = containerStyle;



const itemContainerStyle = `
    grid-row: auto;
    display: flex;
    justify-content: space-around;
    width: 70vw;
    height: auto;
    padding: 20px 0 20px 0;
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

