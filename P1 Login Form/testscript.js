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
    // console.log(elements);
    checkRequired(elements);
    // console.log(output);
    checkLength(elements);
    checkEmail(elements);
    checkConfirmation(elements  );

} )

    // Check If any Fields are Empty 
    function checkRequired(elements){
        var output={}
        for (i=0; i<elements.length; i++){
            if (elements[i].value === '') {
                output[elements[i].id]=false;
                showError(elements[i],elements[i].id +' must be fiilled.') 
            }
        }
        return output;

    }
    //Check Length of Password and User Name
    function checkLength(elements){

        for (i=0; i<elements.length; i++) {
            if (elements[i].id ==='username' || elements[i].id === 'password'){
                if (elements[i].value !== '')   {
                    if (elements[i].value.length < 5) {
                        showError(elements[i],elements[i].id + "is less than 5")
                    } else if (elements[i].value.length > 15) {
                        showError(elements[i],elements[i].id + "is greater than 15")
                    } else {
                        showSuccess(elements[i])
                    }
                    
                }
            }
        }
    }
    // Check If email is valid  valid--> a@yahoo.com
    function checkEmail(elements) {
        console.log("email condition");
        for (i=0; i<elements.length; i++) {
        console.log(elements[i]);
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
              if (elements[i-1].value ===''){
                  showError(elements[i]," Please Set the Password First")
              }     else if (elements[i].value !== elements[i-1].value) {
                    showError(elements[i],"Password did not match.")
                    } else {
                        showSuccess(elements[i]);
                        showSuccess(elements[i-1]);
                    }
            }
        }
    }
   

