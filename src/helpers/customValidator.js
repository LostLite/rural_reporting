import Validator from 'validator';

function ValidateEmail(emailAddress){
    if(!Validator.isEmail(emailAddress)) return "Invalid email Address";
}

export {
    ValidateEmail
}