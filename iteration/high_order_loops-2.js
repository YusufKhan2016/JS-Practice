const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple",
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"];

for(const k in programming){
    // console.log(programming[k]);
    // console.log(k);
}

const map = new Map()

map.set('BDT','Taka')
map.set('BDT','Taka')
map.set('INR','Rupee')
map.set('USD', 'Dollar')

for (const key in map) {
    console.log(key);
}