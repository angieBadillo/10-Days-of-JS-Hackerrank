/**Task
 * Declare a constant variable, PI , and assign it the value Math.PI. You will not pass this challenge unless the variable is declared as a constant and named PI (uppercase).
 * Read a number, r, denoting the radius of a circle from stdin.
 * Use PI and  to calculate the area  and perimeter  of a circle having radius r.
 * Print area as the first line of output and print perimeter as the second line of output.


 * Input Format
 * A single integer, r, denoting the radius of a circle.
 **/

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let r = parseFloat(readLine());
    const PI = Math.PI;

    // Print the area of the circle:
    let area = PI * Math.pow(r, 2);

    // Print the perimeter of the circle:
    let perimeter = PI * r * 2;

    console.log(area);
    console.log(perimeter);
}