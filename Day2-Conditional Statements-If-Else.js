/**
 *Task
 * Complete the getGrade(score) function in the editor. It has one parameter: an integer, score, denoting the number of points Julia earned on an exam.
 * It must return the letter corresponding to her grade according to the following rules:

 **/

function getGrade(score) {
    var grade;
    // Write your code here
    if (25 < score && score <= 30){
        grade = ("A");
    }
    if (20 < score && score <= 25){
        grade = ("B");
    }
    if (15 < score && score <= 20){
        grade = ("C");
    }
    if (10 < score && score <= 15){
        grade = ("D");
    }
    if (5 < score && score <= 10){
        grade = ("E");
    }
    if (0 < score && score <= 5){
        grade = ("F");
    }

    return grade;
}