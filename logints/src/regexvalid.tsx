export const namevalid = (name: string) =>{
    const nameregex =/^([A-Z a-z])+$/;
    return nameregex.test(name)
}


export const emailvalid = (email: string) =>{
    const emailregex =/^([A-Z a-z 0-9])+\@([a-z])+\.([a-z])+$/;
    return emailregex.test(email)
}

export const passwordvalid = (password: string)=>{
    const passwordregex =/^([A-Z a-z 0-9])+\@+$/;
    return passwordregex.test(password)
}

