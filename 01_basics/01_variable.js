const accountID = 1232133;
let accountEmail = 'hasanrafsun5@gmail.com';
var accountCity= "Bengaluru";
accountCity = 'Jaipur';

let x; //this will return undefined cause it's just declared not initilialized

// accountID = 2; not allowed
accountEmail = "hasanrafsun@gmail.com";
accountCity = "Dhaka";

console.table([accountID,accountEmail,accountCity,x]);

/*
prefer not to use var. because of issue in block scope and fuctional scope
*/
