// Geting all user input values 
const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById('email');
const password=document.getElementById("password");
const password2=document.getElementById("password confirmation");



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





form.addEventListener('submit',function(e){

    e.preventDefault();
    
    const elements=document.getElementsByTagName("input");
    checkEmptyFields(elements);
    checkRequired(elements);
    checkEmail(elements);

} )

// Following sequence is used:
// On submit,
// Check Empty fields
// Check  username contain alpha-numeric character
// Check  username length is >5  and  <15.
// Check  password contain atleast digit,upper/lowercase,@$!%*?&
// Check  password length is >5  and  <15.
// Check email in formate a@yahoo.com or a@hotmail.com ora@gmail.com
// Check if both password is same.





    // Check If any Fields are Empty 
    function checkEmptyFields(elements){
        var output={}
        for (i=0; i<elements.length; i++){
            if (elements[i].value === '') {
                output[elements[i].id]=false;
                showError(elements[i],elements[i].id +' must be fiilled.') 
            }
        }
        return output;

    }

        // Check Required Input For UserName and Password 
function checkRequired(elements){
    // var output={}
    for (i=0; i<elements.length; i++){
        if (elements[i].value != '') {
            if (elements[i].id ==='username' ){
                var regexu = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/; // must alphanumeric, min 3
                var str = elements[i].value;
                var result = regexu.test(str);
                if  (result===true){
                    console.log(result);
                    checkLength(elements[i].id,elements);
                } else {
                    showError(elements[i],elements[i].id +' is not valid.') 
                    }
            }
            
                

                if (elements[i].id ==='password'){
                var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/; //uppercase,lowercase,digit,@$!%*?&
                var str = elements[i].value;
                var result = regexp.test(str);
                if  (result===true){
                    console.log(result);
                    checkLength(elements[i].id,elements);
                } else {
                    showError(elements[i],elements[i].id +' is not valid.') 
                    }    
           }
        }
    }
}


            //Check Length of Password and User Name
    function checkLength(idname,elements){
                if (elements[idname].value.length < 6) {
                        showError(elements[idname], idname + " is less than 6")
                    } else if (elements[idname].value.length > 15) {
                        showError(elements[idname],idname + " is greater than 15")
                    } else {
                        showSuccess(elements[idname])
                        if (elements[idname].id==='password') {
                            checkConfirmation(elements);
                            console.log("going to confimration");
                        }
                    }                
    }



    // Check If email is valid  valid--> a@yahoo.com
function checkEmail(elements) {
    for (i=0; i<elements.length; i++) {
        if (elements[i].id ==='email') {
            if (elements[i].value !=''){
                var regex = /^[^@]+@(yahoo|hotmail|outlook|gmail)\.(com|in|co\.uk)$/i;
                var str = elements[i].value;
                var result = regex.test(str);
                if (result!=true)
                {
                showError(elements[i],elements[i].id+" is not valid.") }
                                
                else {
                    showSuccess(elements[i])
                                    }
            }
    }        
}

}
   //Check If password confirmation match.
function checkConfirmation(elements) {

    for(i=0; i<elements.length; i++){
        if (elements[i].id=== 'password confirmation') {
            if (elements[i].value === '' ){
                showError(elements[i]," Please Confirm    Password ")
            }     else if (elements[i].value !== elements[i-1].value) {
                showError(elements[i],"Password did not match.")
                } else {
                    showSuccess(elements[i]);
                    showSuccess(elements[i-1]);
                }
        }
    }
}
   

