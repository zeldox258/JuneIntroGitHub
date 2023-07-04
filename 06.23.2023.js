console.log("Hello");
/*
    1. 100
    2. 50
    3. 25
    4. 10
    5. 1
*/



function buildTower(length, sticks){
    let dpArr = [0,1];
    //           0 , 1

    for(let i = 2;i<=length;i++){
        dpArr[i] = dpArr[i-1] + 1;

        for(let j = 1;j<sticks.length;j++){
            if(i >= sticks[j]){
                dpArr[i] = Math.min(dpArr[i-sticks[j]] + 1 , dpArr[i]);
            }
        }

    }

    for(let i = 1;i<= length;i++){
        console.log(`${i}.seviyeye minimum ${dpArr[i]} tane cubuk kullanilarak cikilir`);
    }

    return dpArr[length];
}

const sticks1 = [1, 10, 25, 50, 100];
console.log(buildTower(758,sticks1));







function minimumSticks(sticks, towerLength) {
    const stickList = sticks.slice();
    let counter = 0;
  
    for (let stick of stickList) {
  
      if(towerLength >= 55 && towerLength < 75 && stick === 50) continue;
      if(stick === 25 && towerLength / 25 > 0) {
          counter++;
          towerLength -= 25;
          continue;
      }
  
      counter += Math.floor(towerLength / stick);
      towerLength %= stick;
    }
  
    return counter;
  }
  
  const sticks = [100, 37, 23, 10, 1];
  const towerLength = 100;
  
  const result = minimumSticks(sticks, towerLength);
  console.log(result);



  function Person(name,age){//function constructor
    this.name = name;
    this.age = age;

    this.printName = function (){
        console.log(this.name,this.age);
    }
  }


  let kutay = new Person("Kutay",23);

  console.log(kutay);
kutay.printName();



/**

n merdiven.

biz bu merdiveni her adimda 1 ya da 2 basamak cikabilirz.
ben bu merdiveni kac farkli sekilde cikabilirm.


*/


function howManyWay(length){
    let dpArr = [0,1,2,4];

    for(let i = 4;i<=length;i++){
        dpArr[i] = dpArr[i-1] + dpArr[i-2] + dpArr[i-3];
    }

    return dpArr[length]
}

  
console.log(howManyWay(5));




