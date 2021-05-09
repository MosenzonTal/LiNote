class AuthenticationService{    

registerSuccessfulLogin(username, password){
    console.log('registerSuccessfulLogin')
    sessionStorage.setItem('AuthenticatedUser',username);
}

logout(){    
    sessionStorage.removeItem('AuthenticatedUser')   
}

//a method which helps disable\enable links in the Header  
isUserLoggedIn(){
    let user = sessionStorage.getItem('AuthenticatedUser')
    if(user===null) return false //user is not logged in
    return true //user is logged in
}

getLoggedInUserName(){
    let user = sessionStorage.getItem('AuthenticatedUser')
    if(user===null) return '' 
    return user
}

}

export default new AuthenticationService() 
// For React Components we export the class directly.
// For helper Services, we export an istance of the class - an object.

// sessionStorage vs LocalStorage:
// sessionStorage- is more Secure. when you go out from the browser, the key is deleted.
// data stored in sessionStorage gets cleared when the page session ends.

// LocalStorage - is less Secured. when you go out from the Browser, the key is still exist.
// Data stored in LocalStorage has no expiration time.