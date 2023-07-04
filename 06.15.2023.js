
/*
-
--
---
----
-----
------
-------
--------
-------
------
-----
----
---
--
-
*/

let limit = 51


for(let i = 0; i <= limit ;i++){
    
    if(i <= limit/2){
        console.log("-".repeat(i));
    }
    else{
        console.log("-".repeat(limit-i));//(11  9) 12 8 13 7) (14 6)
    }
}


// Fibonacci

// 1 1 2 3 5 8 13 21 34 55 89 ....



/*
prev 3
curr 5
newVal 8


prev = cur

prev  5
curr  5
newVal 8
curr = newVal

prev  5
curr  8
newVal 8


*/

let searchedNum = 11;

let prev = 1;//1.number
let curr = 1;//2.number

if(searchedNum == 1 || searchedNum == 2){
    console.log(`${searchedNum}.number is : ${1}`);
}

else{

    for(let i=3; i <= searchedNum;i++){
        let newValue = prev + curr;
        prev = curr;
        curr = newValue;

    }
    console.log(`${searchedNum}.number is : ${curr}`);
}


//for , while


let i = 0;

while(i < 25){

    console.log(i);
    i++;

}

i = 0;
while(true){

    i++;
    if(i == 100){
        continue;
    }
    console.log(i);
    

    if(i >=100){
        break;
    }

}


/*

let limit = 51

for(let i = 0; i <= limit ;i++){
    
    if(i <= limit/2){
        console.log("-".repeat(i));
    }
    else{
        console.log("-".repeat(limit-i));//(11  9) 12 8 13 7) (14 6)
    }
}

*/


limit = 20;
i = 0;

while(i <= limit) {
    if (i <= limit/2) {
        console.log("-".repeat(i));
    }
    else{
        console.log("-". repeat(limit-i));
    }
    i++;
}




/*


let searchedNum = 11;

let prev = 1;//1.number
let curr = 1;//2.number

if(searchedNum == 1 || searchedNum == 2){
    console.log(`${searchedNum}.number is : ${1}`);
}

else{

    for(let i=3; i <= searchedNum;i++){
        let newValue = prev + curr;
        prev = curr;
        curr = newValue;

    }
    console.log(`${searchedNum}.number is : ${curr}`);
}



*/

searchedNum = 15;

prev = 1;//1.number
curr = 1;//2.number

if(searchedNum == 1 || searchedNum == 2){
    console.log(`${searchedNum}.number is : ${1}`);
}

else{
    let i = 3;
    while( i <= searchedNum){
        let newValue = prev + curr;
        prev = curr;
        curr = newValue;
        i++;
    }
    console.log(`${searchedNum}.number is : ${curr}`);
}


let text = "Kutay Gulkanat";
//          0123456789

i = 0;

while(i < text.length){
    console.log(text.charAt(i).repeat(i+1));
    i++;
}

//for
for(i = 0;i < text.length;i++){
    console.log(text.charAt(i).repeat(text.length));
}

let num = 25846;
console.log(Math.floor(Math.log10(num))+1);


let replacedText = text.replaceAll('a','b');
let replacedText1;

console.log(replacedText);
console.log(replacedText1);


/*

K
uu
ttt
aaaa
yyyyy

GGGGGGG
uuuuuuuu
lllllllll
kkkkkkkkkk
aaaaaaaaaaa
nnnnnnnnnnnn
aaaaaaaaaaaaa
tttttttttttttt

*/










