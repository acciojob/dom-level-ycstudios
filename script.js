const element = document.getElementById("level"); 
let count = 1; 
let currentElement = element; 

while (currentElement.parentElement) {
    currentElement = currentElement.parentElement; 
    count++; 
}

alert("The level of the element is: " + count);
