
let noOfItemsPerheight  = 16;
const gap = 2; //gap value from css
const containerSize = 600; // container size from width/height value

// Calculating space taken by the gaps out of the 500 width/height size
const totalGapSpace = (noOfItemsPerheight - 1) * gap;

// Calculating available space remaining for the squares 
const availableSpaceForItems = containerSize - totalGapSpace;

// Calculating the size of each square to fit the remaining space
const itemDimension = `calc(${availableSpaceForItems}px / ${noOfItemsPerheight})`;



count = 0;
const container = document.querySelector(".container");
//container.style.backgroundColor = ("green");

/*const divs = document.createElement("div");
divs.style.backgroundColor = "blue";
divs.style.height = "10px";
divs.style.width = "10px";
*/
for (let i = 0; i < noOfItemsPerheight; i++) {
    for (let j = 0; j < noOfItemsPerheight; j++) {
        const divs = document.createElement("div");
        divs.classList.add("items");

        divs.style.backgroundColor = "blue";
        //used these without removing the space taken by the gaps
        
       // divs.style.height =  `calc( 500px / ${noOfItemsPerheight })`;
        
       // divs.style.flexBasis = `calc(500px / ${noOfItemsPerheight})`;

       divs.style.height = itemDimension;

       divs.style.flexBasis = itemDimension




        container.appendChild(divs);
        count += 1;
        console.log(count);

 /*   for (let j = i + 1; j < 16; j++) {
        const divs = document.createElement("div");

        divs.style.backgroundColor = "blue";
        divs.style.height = "30px";
        divs.style.width = "30px";
        divs.style.margin = "2px";

        container.appendChild(divs);
    }*/
    }
    
}