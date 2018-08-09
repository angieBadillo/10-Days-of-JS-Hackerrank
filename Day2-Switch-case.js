/**
 * Task
 Complete the getLetter(s) function in the editor. It has one parameter: a string, s, consisting of lowercase English alphabetic letters
 (i.e., a through z). It must return A, B, C, or D depending on the following criteria:
 **/

function getLetter(s) {

    s = s.charCodeAt(0);
    let letter;
    // Write your code here
    switch (true){
        case (s==97 || s==101 || s==105 || s==111 || s==117):
            letter = "A";
            break;
        case (s >= 98 && s <= 103):
            letter = "B";
            break;
        case (s >= 104 && s <= 109):
            letter = "C";
            break;
        case (s >= 110 && s <= 122):
            letter = "D";
            break;
        default:
            console.log("Invalid character");
    }
    return letter;
}