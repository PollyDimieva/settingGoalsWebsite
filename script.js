const form = document.getElementById('form');
const userID = document.getElementById('userID');
const password = document.getElementById('password');
const fullname = document.getElementById('name');
const address = document.getElementById('address');
const country = document.getElementById('country');
const zipCode = document.getElementById('zipCode');
const email = document.getElementById('email');
const sex = document.getElementById('sex');
const language = document.getElementById('language');
const bio = document.getElementById('bio');

const small = document.querySelectorAll('small');
const button = document.getElementById('btn');
button.onclick = checkInputs;

form.addEventListener('submit' ,(e) => {
    e.preventDefault();
    //  checkInputs();
});

function checkInputs(){
    //get values from input
    const userIDvalue = userID.value.trim(); // removes white spaces
    const passwordValue = password.value.trim();
    const nameValue = fullname.value.trim();
    const addressValue = address.value.trim();
    const countryValue = country.value.trim();
    const zipCodeValue = zipCode.value.trim();
    const emailValue = email.value.trim();
    const sexValue = sex.value.trim();
    const languageValue = language.value.trim();
    const bioValue = bio.value.trim();

    


    //user id validation
    if(userIDvalue === ''){
        console.log('it is blank');
        setErrorFor(userID, 'User ID cannot be blank', small[0] );
    }else if(!containsUppercase(userIDvalue.charAt(0))){
        console.log('Your User ID must start with a capital letter');
        setErrorFor(userID,'Your User ID must start with a capital letter',small[0])
    }else if(userIDvalue.length < 5 || userIDvalue.length > 12){
        console.log('Your User ID must have more than 5 letters and less than 12');
        setErrorFor(userID,'Your User ID must more than 5 and less than 12 characters',small[0]);
    }else if(!endsWithNumberOrSpecialChar(userIDvalue)){
        console.log('Your User Id must end with a number');
        setErrorFor(userIDvalue, 'Your User ID must end with a number',small[0]);
      }
    else{
        setSuccessful(userID);
    }

    //password validation
    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank',small[1]);
    }else if(passwordValue.length < 12){
        setErrorFor(password,'Password must be at least 12 characters',small[1])
    }else if(!containsUppercase(passwordValue)){
        setErrorFor(password,'Must contain upper case letter',small[1])
    }else if(!containsNumber(passwordValue)){
        setErrorFor(password,'Must contain a number',1)
    }else if(!containsSpecialCharacter(passwordValue)){
        setErrorFor(password,'Must contain a special character',small[1])
    }else{
        setSuccessful(password);
    }

    //name validation
    if(nameValue === ''){
        setErrorFor(fullname, 'Name cannot be blank',small[2]);
    }else if(containsNumber(nameValue) || containsSpecialCharacter(nameValue)){
       setErrorFor(fullname, 'Must contain only letters',small[2])
    }else{
        setSuccessful(fullname);
    }
   
    //country validation
    if(countryValue === ''){
        setErrorFor(country, 'Country cannot be blank',small[3]);
    }else{
        setSuccessful(country);
    }


    //zipCode validation
    if(zipCodeValue === ''){
        setErrorFor(zipCode, 'Zip code cannot be blank',small[4]);
    }else if(!isValidZipCode(zipCodeValue)){
        setErrorFor(zipCode,'Invalid zip code',small[4])
    }
    else{
        setSuccessful(zipCode);
    }

    //email validation
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank',small[5]);
    }
     if(!isValidEmail(emailValue)){
        setErrorFor(email,'Enter a valid email',small[5])
    }
    else{
        setSuccessful(email);
    }

    if(languageValue === ''){
        setErrorFor(language, 'Language cannot be blank',small[6]);
    }else{
        setSuccessful(language);
    }
}

function endsWithNumberOrSpecialChar(string){


    if(containsNumber(string.at(-1)) || 
    containsSpecialCharacter(string.at(-1))){
        return true;
    }else{
        return false;
    }
}

function isValidZipCode(string) {
    if (string.length == 6){
        
        if(containsNumber(string.charAt(0)) && containsNumber(string.charAt(1))
         && containsNumber(string.charAt(2)) && containsNumber(string.charAt(3) )){
            if(containsUppercase(string.charAt(4))
             && containsUppercase(string.charAt(5))){
                return true;
            }
       
    }else{
        return false;
    } 
}else{
    return false;
}
}

function isValidEmail(string){
    var isValidEmail = true;
    

    if(string.length < 5 ){
        isValidEmail = false;
    }else{

        
        var indexOfAt;
        var indexOfDot;
        var hasAt = false;
        var hasDot = false;

    for(let i = 0 ; i< string.length ; i++){
        if(string.charAt(i)=='@'){
            indexOfAt = i;
            hasAt = true;
            break;
        }
    }

    for(let j = indexOfAt +1 ; j< string.length; j++){
        if(string.charAt(j)=='.'){
            indexOfDot = j;
            hasDot = true;
            break;
        }
    }
    if(hasAt == false || indexOfAt == 0 || hasDot == false 
        || indexOfAt == indexOfDot+1 || indexOfDot == (string.length - 1)){
        isValidEmail = false;
    }
   return isValidEmail;
}
}
function containsUppercase(string) {

    const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";

        for(let i=0 ; i< string.length; i++){
            if(letters.includes(string.charAt(i))){
                return true;
            }
        }return false;
}

function containsOnlyLetters(string){
    const letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        
        for(let i=0 ; i< string.length; i++){
            if(letters.includes(string.charAt(i))){
                return true;
            }
        }return false;
}

function containsNumber(str) {
    const numbers = "1234567890";
    // alert(str);

    for( let i = 0 ; i < str.length ; i++){
        if(numbers.includes(str.charAt(i))){
            return true;
        }
    }

    return false;
}

function containsSpecialCharacter(string) {

    for(let i=0; i < string.length ; i++){
        if(!containsNumber(string.charAt(i))&& !containsOnlyLetters(string.charAt(i)) ){
            return true;
        }
    }
    return false;
   
}
function setErrorFor(input, message, small){

    // alert('ERROR');
    const formControl = input.parentElement;
    small.innerText = message;
    formControl.className = 'form-control error';
}
function setSuccessful(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
