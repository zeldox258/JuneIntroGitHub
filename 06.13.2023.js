console.log("Hello 1 2 3 4 5");
console.log(58);

//string number boolean -> undefine NULL

// let const


let furkan = "Furkan";
let furkanAge = 24;
let isFurkanLoveBasketball = true;
let undefValue;
let nullValue = null;

console.log(undefValue, nullValue);



console.log(furkan);
console.log(furkanAge);
console.log(isFurkanLoveBasketball);



console.log(furkan, furkanAge     ,    isFurkanLoveBasketball);
console.log(furkan + " is " +furkanAge   + " Years old and is he love basketball : "  +    isFurkanLoveBasketball);
console.log(`Selamlar ${furkan} hosgeldiniz`);


/*

Yorum blocku

*/
//Number Conv
console.log(Number(furkan));//NaN -> Not a number
console.log(Number("958"));
console.log(Number("958s"));//NaN -> Not a number
console.log(Number(true));
console.log(Number("true"));
console.log(Number(false));
console.log(Number("false"));
console.log(Number(undefined));
console.log(Number(null));
//Boolean Conv
console.log("Boolean convert.");

console.log(Boolean(5));
console.log(Boolean(-5));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//String Conv
console.log("String convert.");

console.log(String(258));
console.log(String(true));
console.log(String(false));
console.log(String(NaN));
console.log(String(Infinity));
console.log(String(undefined));
//console.log(String({"ahmet":15}));


let convertedVersion = String(258);


//
console.log(typeof(true));
console.log("Furkan", typeof(furkan));
console.log("Age", typeof(furkanAge));
console.log("Love Basket", typeof(isFurkanLoveBasketball));
console.log("Inf", typeof(Infinity));
console.log("Undef", typeof(undefined));
console.log("null",typeof(null));

console.log("NAN :",typeof(NaN));//Number



if( isNaN(Number("se")) ){
    console.log("Nan value detected");

}
else{
    console.log("Nan value could not detect");
}

console.log(Number.isInteger(15));


console.log(10 + 25 + 45 + 4+ 4 +4 +44 + 44 +4 + NaN);

console.log(15 + 25);// 40
console.log(15 - 25);// -10
console.log(15 / 25);// 3/5
console.log(15 * 25);// 375

console.log(15 + "25");
console.log(15 - "25");
console.log(15 / "25");
console.log(15 * "25");

console.log(15 + "25s");
console.log(15 - "25s");
console.log(15 / "25s");
console.log(15 * "25s");

console.log(5 + 5 + 5 +"5");//15 + "5" = "155"
console.log(5 + 5 + "5" + 5 + "5");
console.log(5 + 20 + 5 + "5" + 5 + "5");
console.log(5 + 5 + "5" + 5 + "5" + (20 + 25 + "5"));
console.log((255) + (355) + (200) + "");

 
console.log(1 + 1 + 1 + 1 + 1 + ("1") + 1 + 1 + 1 + 1 + 1 );

console.log(5 + 5 + "1 + 1" + 5);
console.log(5 + 5 + "Mahmut" + 5);





// > < >= <= == === !

console.log(5 > 3);
console.log(5 < 3);
console.log(5 <= 3);
console.log(5 >= 3);
console.log(!(5 < 3));


console.log("15" == ""+15);
console.log("15" === ""+15);

console.log("15" === 15);

console.log(NaN == NaN);// Line 88 FALSE!!!!
console.log(isNaN(NaN));

console.log(Infinity == 1/0);


// && = AND || = OR





console.log(true || true);
console.log(true || true && false);

console.log(true && true && false && false && false && false && false || true && false );


console.log( true && false || true && false || true && false || false && true);


console.log( true || true && (false || false));


console.log(false && true && true && true || true && false || true)
console.log(false && true && true && true || true && false )
//execute order () -> && -> ||

//false && herhangi bir şey = false
//true || herhangi bir şey = true









