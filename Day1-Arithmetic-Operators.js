/**Complete the following functions in the editor below:
 * GetArea(length, width): Calculate and return the area of a rectangle having sides  and .
 * GetPerimeter(length, width): Calculate and return the perimeter of a rectangle having sides
 * The values returned by these functions are printed to stdout by locked stub code in the editor.
 **/
function getArea(length, width) {

    // Write your code here

let area = length * width;
return area;
}
/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/

function getPerimeter(length, width) {

    // Write your code here
    let perimeter = 2*(length + width);
    return perimeter;
}