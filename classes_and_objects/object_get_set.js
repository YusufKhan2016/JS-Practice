const User ={
    // hardcore values 
    _email: "hasanrafsusn5",
    _password: "dslfkasdlfk",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
}

const chai =  Object.create(User);
console.log(User.email);