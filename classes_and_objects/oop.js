const user = {
    username: "Rafsun",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this)
    }


}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn ) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}


//  const userOne = User("hitesh", 12, true);
//  const userTwo = User("chai aur code", 22, false);
const userOne = new User("hitesh", 12, true);
 const userTwo = new User("chai aur code", 22, false);

 //this constructor functions makes new objects

 console.log(userOne);