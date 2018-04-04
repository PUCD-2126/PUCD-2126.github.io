/*

// Jquery is a javascript library that allows you to select elements, traverse those elements, and manipulate them
// Below we are selecting <p> tags that are descendents of .container

var groceries = $('#container-87435 .container').find('p');

// Here we are changing the color of all the <p> tags we selected above
// there are 2 ways to do this. 
// you can either modify one property by passing in a property name and a value as comma delimited arguments:
 groceries.css('color', 'red'); 

// or you can pass an object. do this if you want to change more than 1 property at a time.
 groceries.css({
  color: 'red',
  backgroundColor: 'blue'
});
*/

/* 
// Jquery also allows you to empty the siblings of a selection:

groceries.empty();
console.log(groceries); 
*/

// Events
// Jquery can also listen to events by using the `on` function
// below we are selecting an element with the class `mousePosition`
// and we are declaring a function named `mouseMove` -- this will get called whenever our event happens
var mousePositionDisplay = $('.mousePosition');
var mouseMove = function(event) {
  // set the text of our element to the x and y positions of our mouse
  mousePositionDisplay.text('X: ' + event.pageX + ', Y: ' + event.pageY);
  // change the position of our element using the event object passed as an argument
  // to this function automatically by jquery
  mousePositionDisplay.css({
    top: event.pageY,
    left: event.pageX
  });
}


// here we are listening to `mousemove` events that occur on the document
// when your mouse moves the `mouseMove` function will be called
$(document).on('mousemove', mouseMove);