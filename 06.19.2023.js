console.log("Hello");


//Write a function called isEven that takes a number as an argument and 
//returns true if it is even and false if it is odd.


function isEven(number) {
    if(number % 2 === 0) return true;
    else return false;
}


console.log(isEven(98));


//Write a function called sumNumbers that takes two numbers as arguments and returns their sum.(Suleyman)


function sumNumbers(num1, num2){
    if(isNaN(Number(num1)) || isNaN(Number(num2))  ){
        return -1;
    }

    return Number(num1)+Number(num2);
}


console.log(sumNumbers(5,"98"));

//Write a function called reverseString that takes a string as an argument 
//and returns the reverse of the string. (Kutay)

function reverseStringWithFunction(str){
    return str.split('').reverse().join('');
}


function reverseStringWithFor(str){
    let resultStr = "";

    for(let i = str.length -1; i>=0 ; i--){
        resultStr+= str.charAt(i);//selamNaber
    } 

    return resultStr;

}


console.log(reverseStringWithFunction("selamNaber"));
console.log(reverseStringWithFor("selamNaber"));

//Write a function called findMax that takes three numbers as arguments 
//and returns the maximum number among them.(Furkan)



function findMax(num1,num2,num3,num4,num5){
    if(isNaN(Number(num1)) || isNaN(Number(num2))  || isNaN(Number(num3)) || isNaN(Number(num4))  || isNaN(Number(num5))   ){
        return null;
    }
    let result = num1;


    if(num2 > result) result = num2;
    if(num3 > result) result = num3;
    if(num4 > result) result = num4;
    if(num5 > result) result = num5;


    return result;
    
}

 /*
    if (num1 > num2 && num1 > num3) {
        return num1;
    }
    else if (num2 > num1 && num2 > num3){
        return num2;
    }
    else{
        return num3;
    }
*/

console.log(findMax(95,95,985,95,"999"));


/*
Write a function called getGrade that takes a number score as an 
argument and returns the corresponding letter grade based on the following grading scale:

90-100: A
80-89: B
70-79: C
60-69: D
Below 60: F
*/


function getGrade(num1) {
    if(num1 >= 90)
        return "A";
    else if(num1 >= 80)
        return "B";
    else if(num1 >= 70)
        return "C";
    else if(num1 >= 60)
        return "D";
    else
        return "F";
}


console.log(getGrade(79.01));



//Write a function called countVowels that takes a 
//string as an argument and returns the number of vowels in the string.

//a e i o u

function countVowels(str) {
    let count=0
    for(let i = str.length -1; i>=0 ; i--){
        if(str.charAt(i)==="a" || str.charAt(i)==="e" || str.charAt(i)==="o" || str.charAt(i)==="u" || str.charAt(i)==="i" ){
            count++;
        }
    } 
    return count;
}


console.log(countVowels("husrev bilgisayarimi ele gecirdi"));


//space sayisi

function countSpaces(str) {
    let count=0
    for(let i = str.length -1; i>=0 ; i--){
        if(str.charAt(i)===" "){
            count++;
        }
    } 
    return count;
}


console.log(countSpaces("husrev bilgisayarimi         ele gecirdi"));


//Write a function called findLongestWord that takes a strings as an parameter
//returns the longest parameter

function findLongestWord(str1,str2,str3) {
    let result = str1

    if(str2.length > result.length) result = str2;
    if(str3.length > result.length) result = str3;

    return result;


}

console.log(findLongestWord("Husrev","Furkan Boyraz","Mehmet"));
