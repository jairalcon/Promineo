// ! 1st example
// * example - calling 
document.getElementById('content').innerHTML = 'Goodbye.';

// ! 2nd example
// * have references to button and content
let button = document.getElementById('btn');
let content = document.getElementById('content');

// * adding event listener when we click button
// * padding in function in second parameter
button.addEventListener('click', () => {
    // * adding conditional
    if (content.innerHTML == 'Goodbye.') {
        // * changes content to "Hello."
        content.innerHTML = 'Hello.'
    } else {
        //  * changes content back to "Goodbye."
        content.innerHTML = 'Goodbye.'
    }
});

// ! 3rd example
// * adding event listener to anon returned element
document.getElementById('remove').addEventListener('click', () => {
    // !6th example
    // * deleting a specific element
    let idToRemove = document.getElementById('remove-id').value;
    let elementToRemove = document.getElementById(idToRemove);
    // * use child to find its parent first, then removeChild's content
    elementToRemove.parentNode.removeChild(elementToRemove);
    document.getElementById('remove-id').value = '';
    // content.parentNode.removeChild(content);
})

// ! 6th example
let id = 0;


// ! 4th example
// * finding ID 'add' and adding function to button
document.getElementById('add').addEventListener('click', () => {
    // * assigning new variable of div
    let parent = document.getElementById('paragraphs');
    // * creating new element and assigning variable with tag name 'p'
    let newElement = document.createElement('p');
    // * take new element and add attributes we want to it
    // ! 5th example with text input
    newElement.innerHTML = document.getElementById('new-text').value;
    // ! 6th example
    // * takes 2 parameters and the value we're going to set it to, increment ++ or --
    newElement.setAttribute('id', id++);
    // * append it to the parent
    parent.appendChild(newElement);
    // * resetting value to empty string text is submitted
    document.getElementById('new-text').value = '';
});

