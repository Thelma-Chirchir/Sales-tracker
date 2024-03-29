export const logout =()=>{

}

export const isUserLogin=()=>{
    const user =JSON.parse(localStorage.getItem('user') ?? '{}');
    //make an API with user id
    console.log(user.email && user.token)
    return user.email && user.token
}