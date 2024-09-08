export const validateEmail = (inputEmail) =>{
    const email = inputEmail.trim()
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email)
}
export const validNameContent = (nameContent)=>{
    if (/^[A-Za-z ]+$/.test(nameContent) || nameContent == "") return true;
    else return false;
}
export const validatePassword = (password)=>{
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
}
export const validateDate = (date) => {
    if(date == "")return true;
    if(/^\d+$/.test(date)){
        const val = Number.parseInt(date);
        const currentyear = Number.parseInt(new Date().getFullYear());
        if(val<=currentyear)return true;
        else return false;
    }
    return false;
}
export const validateForm = (form)=>{
    const firstname = getName(form.firstname);
    const lastname = getName(form.lastname);
    const registrationNumber = form.registrationNumber.trim()
    const email = form.email.trim().toLowerCase();
    return {...form,firstname:firstname,lastname:lastname,registrationNumber:registrationNumber,email:email};
}

export const getName = (name)=>{
    let array = name.trim().split(" ");
    let newName = "";
    array.forEach((val)=>{
        if(/^[A-Za-z]+$/.test(val)){
            let capitalizedWord = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
            newName+=capitalizedWord+" ";
        }
    })
    newName = newName.trim();
    return newName;
}

export const getInitials = (name) =>{

    // name = name.trim(); 
    if(!name) return " "; 

    const words = name.split(" ");
    let initials = ""; 

    for(let i = 0 ; i< Math.min(words.length, 2); i++ ){
        initials += words[i][0];
        }

        return initials.toUpperCase();
}