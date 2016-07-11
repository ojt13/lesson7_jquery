//displays the next element after the current target
function display(event) {
   /* global $*/  $(event.currentTarget).next().fadeIn("slow");
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);
$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    
 $(event.currentTarget).next().animate("fast");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "purple");
 }, function(){
 $(this).css("background-color", "teal");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);