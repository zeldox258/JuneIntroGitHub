let myFirstArray = [1,5,"6",7,8,"8"];//type object

console.log(myFirstArray);
console.log(typeof(myFirstArray))
console.log(myFirstArray[2]);

console.log(myFirstArray[4]);
console.log(myFirstArray[5]);
myFirstArray[6] = 25;

myFirstArray[7] = 25;
myFirstArray[10] = 25;

console.log(myFirstArray);
console.log(myFirstArray[5]);


for(let i = 0 ; i < myFirstArray.length ; i++ ){
    console.log(`${i}th`,myFirstArray[i]);
}




function sumOfArray(array){
    let result = 0;
    for(let i = 0 ; i < array.length ; i++ ){
        if(array[i] != undefined && !isNaN(Number(array[i])))
            result += Number(array[i]);
    }
    return result;
}

//[ 1, 5, 6, 7, 8, <1 empty item>, 25, 25, <2 empty items>, 25 ]
//27undefined2525undefinedundefined25
//[ 1, 5, 6, 7, 8, '8', 25, 25, <2 empty items>, 25 ]


console.log(sumOfArray(myFirstArray));

myFirstArray.push(1215);
console.log(myFirstArray);
myFirstArray.pop();
console.log(myFirstArray);
myFirstArray.splice(5,5);
console.log(myFirstArray);


myFirstArray[9999] = undefined;
myFirstArray[19999] = 1;
console.log(myFirstArray[19999]);

console.log(myFirstArray);
console.log(myFirstArray.length);




let names = ["Kutay","Gulkanat","Emre","Doner","Suleyman","Mert","Durmacalis"];

function concatAllStrings(array){
    let result = "";
    i = 0
    
    while(i < array.length){
        
        result +=  array[i] + " ";
        i++
        
    }
    
    return result;
}

console.log(concatAllStrings(names));



let names2 = ["Kutay","Gulkanat","Emre","Doner","Suleyman","Mert","Durmacalis"];

//listeyi ters cevir stringi de ters cevir

function reverseArray(array) {
    
    for(let i = array.length - 1; i >= 0; i--) {
        let reverseString = '';
        for(let j = array[i].length - 1; j >= 0; j--) {
            reverseString += array[i].charAt(j);
        }
        console.log(reverseString);
    }

    
    
}

reverseArray(names2);




// sayilar, stringler, boolean

//sayilarin toplamini, true degerlerin sayisi, false degerlerin sayisi
//butun stringlerin birlesmis hali

const randomArray = [
    true, false, false, "51asf6", 15, 51, false, "string", 123, true, true, "abc",
    789, false, "xyz", 42, true, "def", 888, 999, "ghi", 777, 123.45, true,
    "jkl", 543, 66, "mno", false, true, "pqr", 987, 321, "stu", 555, 777.888, true,
    "vwx", 111, 222, "yza", false, true, "bcd", 333, 444, "efg", 555, 666.777, true,
    "hij", "klm", "nop", "qrs", "tuv", "wxy", "zab", "cde", "fgh", "ijk", "lmn",
    "opq", "rst", "uvw", "xyz", true, false, "123", "456", 789, 321, false, true,
    "abc", "def", 555, 666, true, false, "ghi", "jkl", 123.45, 678.90, true, false,
    "mno", "pqr", 987, 654, true, false, "stu", "vwx", 333, 111, true, false, "yza",
    "bcd", 444, 222, true, false, "efg", "hij", "klm", "nop", true, false, "qrs",
    "tuv", "wxy", "zab", true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq",
    "rst", "uvw", "xyz", true, false, "123", "456", 789, 321, true, false, "abc",
    "def", 555, 666, true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno",
    "pqr", 987, 654, true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd",
    444, 222, true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv",
    "wxy", "zab", true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst",
    "uvw", "xyz", true, false, "123", "456", 789, 321, true, false, "abc", "def",
    555, 666, true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr",
    987, 654, true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444,
    222, true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy",
    "zab", true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw",
    "xyz", true, false, "123", "456", 789, 321, true, false, "abc", "def", 555,
    666, true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987,
    654, true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg", "hij", "klm", "nop", true, false, "qrs", "tuv", "wxy", "zab",
    true, false, "cde", "fgh", "ijk", "lmn", true, false, "opq", "rst", "uvw", "xyz",
    true, false, "123", "456", 789, 321, true, false, "abc", "def", 555, 666,
    true, false, "ghi", "jkl", 123.45, 678.90, true, false, "mno", "pqr", 987, 654,
    true, false, "stu", "vwx", 333, 111, true, false, "yza", "bcd", 444, 222,
    true, false, "efg"]


function findAll(arr){
    let numCounter = 0;
    let trueCounter = 0;
    let falseCounter = 0;
    let string = "";
    for(i <= 0 ; i < arr.length ;i++){
        if(typeof(arr[i]) == "number")
            numCounter += arr[i];
        if(typeof(arr[i]) == "boolean"){
            if(arr[i]) trueCounter++;
            else falseCounter++;
        }
        if(typeof(arr[i]) == "string"){
            string += arr[i];
        }        
    }


    console.log(numCounter, trueCounter, falseCounter)
    console.log(string)
       
}

findAll(randomArray)



