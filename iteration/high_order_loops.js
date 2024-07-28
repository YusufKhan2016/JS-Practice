

const arr = ["rafsun","nahid","asif","hasibul","sojib","masuma"];

for(let x of arr) {
    // console.log(`name is ${x}`);
}

const greetings = "assamualaikum";

for(let greet of greetings); //console.log(`each character is ${greet}`);;

const map = new Map()

map.set('BDT','Taka')
map.set('BDT','Taka')
map.set('INR','Rupee')
map.set('USD', 'Dollar')


// console.log(map);

for (const key of map) {
    // console.log(key);    
}

for(const [key, value] of map) 
   /* console.log(`${key} => ${value}`) */;

const myobject = new Map(
    name => "rafsun",
    roll => 563180,
    age => 20,      
)

for (const [key, value] of myobject) {
    console.log(`${key} => ${value}`)
}


/// iterations doesn't work with objects