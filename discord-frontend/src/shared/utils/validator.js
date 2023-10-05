export const validateLoginForm = ({ mail, password }) => {
    const ismailValid = validateMail(mail);
    const ispassValid = validatePass(password);

    if (ismailValid && ispassValid) {
        console.log("H");
        return true;
    }
}

export const validateRegisterpage = ({ mail, username, password }) => {
    const ismailValid = validateMail(mail);
    const isusernameValid = validateUser(username);
    const ispassValid = validatePass(password);

    if (ismailValid && isusernameValid && ispassValid) {
        return true;
    }
}

export const validateUser = (username) => {
    return username.legth > 2 && username.length < 13
}

export const validateMail = (mail) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(mail);
}

export const validatePass = (password) => {
    return password.legth > 7 && password.length < 13
}