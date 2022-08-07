// ! 1 TESTING
// testing JQuery functionality
// JQuery 'grabbed' body of the HTML
// console.log($('body'));

// ! 2 Interacting with elements using JQuery
//  selecting element with CSS selector "#"
let p = $('#test');
// selecting element with class name "."
let div =  $('.my-class');
// selecting element by tag
let ul = $('ul');
// logging out variables
console.log(p);
console.log(div);
console.log(ul);

// ! Ways we can interact with element
console.log(p.text());
// can pass empty argument to return text or 
// defined argument that sets the text
p.text('New Text');
// grabbing reference to input, set value of input
// $('input').val('New Value');

// ! accessing placeholder attribute on input field
$('input').attr('placeholder', 'Placeholder Text');

// ! add element to DOM, append, prepend, before, and after
// ! append/prepend for existing elements
// placed as first element inside of div
div.prepend('<p>prepended paragraph</p>');
// placed as last element inside of div
div.append('<p>appended paragraph</p>');
// added before and outside of the div element
div.before('<p>paragraph that was added before the div</p>');
// added after and outside of the div element
div.after('<p>paragraph added after the div</p>');

// ! we can completely remove an element if needed from the DOM
// div still exists but not it's empty
div.empty();
// ul element doesn't exist anymore
ul.remove();

// ! sometimes we want to hide or show an element in the DOM
// .hide() can be programmed to elements
$('input').hide();
// .show() can be adjusted to reveal element after a time
setTimeout(() => $('input').show(), 2000)