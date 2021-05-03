module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {}
    // check for username
    if(username.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    // check for email
    if(email.trim === ''){
        errors.email =  'Email must not be empty';
    } else {
        const regex = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regex)){
            errors.email = 'Email must be a valid email address';
        }
    }
    // check for password
    if(password === ''){
        errors.password = 'Password must not be empty'
    } else if(password !== confirmPassword){
        errors.confirmPassword = 'Passwords must match';
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {};

    if(username.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    if(password === ''){
        errors.password = 'Password must not be empty'
    } 
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}