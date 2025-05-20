function getRandomRgbColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(`rgb(${r}, ${g}, ${b})`);
    return `rgb(${r}, ${g}, ${b})`;
}
//getRandomRgbColor();


function createSquaredDivs (noOfItemsPerheight = 16) {
    
    //noOfItemsPerheight  = parseInt(prompt("Enter number of square 1-100 "));
    
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

    container.innerHTML = "";

    for (let i = 0; i < noOfItemsPerheight; i++) {
    
        for (let j = 0; j < noOfItemsPerheight; j++) {
        
            const divs = document.createElement("div");
        
            divs.classList.add("items");

        
            divs.style.backgroundColor = "blue";
        
            //used these without removing the space taken by the gaps
        
       
            // divs.style.height =  `calc( 500px / ${noOfItemsPerheight })`;
        
       
            // divs.style.flexBasis = `calc(500px / ${noOfItemsPerheight})`;

       
            divs.style.height = itemDimension;

       
            divs.style.flexBasis = itemDimension;

       

       
            divs.addEventListener("mousemove", () => {
       
                divs.style.backgroundColor = getRandomRgbColor();
                divs.style.opacity = 1;

       
                /*when using a class whose style is defined in external
       
                stylesheet css
       
                divs.classList.add("colour");*/

       
            });


       
            container.appendChild(divs);
       
            count += 1;
        
            console.log(count);
            
    
        }
    

    }



}


createSquaredDivs();

const button = document.querySelector(".button");

button.addEventListener("click", (event) => {
    
    noOfItemsPerheight = parseInt(prompt("Enter number of square per side 1-100"), 10);

    if (noOfItemsPerheight) {
        if (noOfItemsPerheight >= 1 && noOfItemsPerheight <= 100) {
            createSquaredDivs(noOfItemsPerheight);

        }
        else {
            const confirmed = confirm("Do you want to Enter number of square per side between 1 t0 100 ?");

            if (confirmed) {
                noOfItemsPerheight = parseInt(prompt("Enter number of square per side 1-100"), 10);
                createSquaredDivs(noOfItemsPerheight);

            }


        }
        
    }
    
});