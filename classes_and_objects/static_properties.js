class User {
    constructor(username) {
        this.username = username;
    }
    logMe() {
        console.log(`username: ${this.username}`);
    }
    static createID() {
        return `123`;
    }
}

const hitesh =  new User("Hitesh");
console.log(hitesh.createID());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iPhone = new Teacher("iphone", "i@phone.com");
iPhone.createID();
