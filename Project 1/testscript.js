// Geting all user input values 
const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById('email');
const password=document.getElementById("password");
const password2=document.getElementById("password2");



function showError(input, message){
    
    // alert("For test");      // for testing
    const formControl=input.parentElement;
    // Overriding/duplicate the Css class name
    //Changing the name does not do any thing. Id does not assume the initial values/values of element withing class.
    // we have to give initival values/properties of element by css.
    formControl.className="form-control error";
    // Here we are just replacing the small message with new one.visibilty has been already been changed
    // we explicity define visible property for new class in html.
    const small=formControl.querySelector("small");
    small.innerHTML=message;


}
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";

}






/////////////////Evenet Listener  & Condition on Listener//////////////////////////
// Create Event listener for submist button
// form.addEventListener('event_name', action-function)
form.addEventListener('submit',function (e)
{
    e.preventDefault();     //Stop page from reloading
    // console.log(username);
    //Condition//
    // condition for  username
    if (username.value==='')
    {
        showError(username,'Username is required');
    }
    else {
        showSuccess(username);
    }  

    // condition for  email
    if (email.value==='')
    {
        showError(email,'Email is required');
    }
    else {
        showSuccess(email);
    }  
        // condition for  password
    if (password.value==='')
    {
        showError(password,'Password is required');
    }
    else {
        showSuccess(password);
    }  
    // condition for  password2
    if (password2.value==='')
    {
        showError(password2,'Confrimation is required');
    }
    else {
        showSuccess(password2);
    }  
});

 
