/* 
 * Function determines if first & last letter of beast and dish match
*/
function feast(beast, dish) {
    return beast[beast.length - 1] === dish[dish.length - 1] && beast[0] === dish[0]
}