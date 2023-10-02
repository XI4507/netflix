export const checkValidData=(email,password)=>{
    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassowrdValid= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    if(!isEmailValid){
        return "Email is not valid"
    }
    if(!isPassowrdValid){
        return "Password is not valid"
    }
    return null;
};