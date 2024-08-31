class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }
    get password() {
        // return this.password.toUpperCase(); //this gives error
        // return this._password.toUpperCase();
        return `${this._password}hitesh`;
    }

    set password (value) {
        // this.password = value.toUpperCase(); // this gives error
        this._password = value.toUpperCase();
    }
}

const hitesh = new User("hi@gmail.com", "abc");
console.log(hitesh.password);