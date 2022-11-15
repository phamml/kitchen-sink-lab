// 1. append text to li that has which li it is on the page (i.e. 0..n-1)
// start by getting references to the relevant DOM elements
// make the specified modifications
let relevantDOMElements = document.getElementsByTagName('li');
console.log();
for (let i = 0; i < relevantDOMElements.length; i++) {
    // relevantDOMElements[i].innerHTML += ` ${i}`;
    const textForI = document.createTextNode(` ${i}`);
    relevantDOMElements[i].appendChild(textForI);
    console.log(i, relevantDOMElements[i]);
}


// 2. when click div console.log(which div on page, i.e 0..n-1)
// get a ref to each div in DOM
// add event listener to each div
relevantDOMElements = document.getElementsByTagName('div');
Array.from(relevantDOMElements).forEach((divElement, i) => {
    console.log(`i: ${i} relevantDOMElements[i]: ${relevantDOMElements[i].innerText}`);
})



// element with id "donut" is clicked, log the number of words in the element