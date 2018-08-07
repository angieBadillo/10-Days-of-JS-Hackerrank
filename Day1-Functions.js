/**Task
 * Implement a function named factorial that has one parameter: an integer, . It must return the value of  (i.e.,  factorial).

 * Input Format
 * Locked stub code in the editor reads a single integer, , from stdin and passes it to a function named factorial.

 /*
 * Create the function factorial here
 */
function factorial(n){

    let fact = n;

    if(n <= 1){
        return 1;
    }

    if(n > 1){

        fact = n * factorial(n - 1);
    }
    return fact;
}