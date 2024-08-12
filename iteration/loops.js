//++++++++++++++++++++++++++++++++++++++++++++ for ++++++++++++++++++++++++++++++++++++++++++ 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) console.log(`5 is the best number`);
    else console.log(element);    
}


for(let i = 0; i<= 3; i++) {
    console.log(`outer loop ${i}`);
    for(let j=0; j <= 3; j++) {
        console.log(`outer loop ${i} and inner loop ${j}`);
        console.log(i + "*" + j + "=" + i*j);
    }
}

let myArray = ["flash","batman","superman"];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

for(let i=0;i<20;i++) {
    if(i == 5) {
        console.log('detected 5');
        break;
        continue;
    }
    console.log(`value of i is ${i}`);
}


