function validateForm(){
    
    //This is a single line commment
    
    /* 
    This is a multiline
    comment
    */
    
    //alert('Validate Function called successfully');
    var errors = "";
    // Get value of element and storing it in variable
    var fullName = document.getElementById('fullName').value; 
    // Check if fullName variable is empty    
    if(fullName==""){
        //alert("Please enter Full Name.");
        // Block action from getting executed
        //return false; 
        errors += "<li>Please enter Full Name.</li>";
        document.getElementById('fullName').classList.add('inputError');
    }
    else{
        document.getElementById('fullName').classList.remove('inputError');
    }
    
    var fullUsername = document.getElementById('fullUsername').value;
    if(fullUsername==""){
        //alert("Please enter Full Username.");
        //return false;
        errors += "<li>Please enter Full Username.</li>";
        document.getElementById('fullUsername').classList.add('inputError');
    }
    else{
        document.getElementById('fullUsername').classList.remove('inputError');
    }  
    
    var fullPassword = document.getElementById('fullPassword').value;
    if(fullPassword==""){
        //alert("Please enter Full Password.");
        // return false;
        errors += "<li>Please enter Full Password.</li>";
        document.getElementById('fullPassword').classList.add('inputError');
    }
    else{
        document.getElementById('fullPassword').classList.remove('inputError');
    }
    
    var nationality = document.getElementById('nationality').value;
    if(nationality=="0"){
        //alert("Please select nationality.")
        //return false;
        errors += "<li>Please enter Nationality.</li>";
        document.getElementById('nationality').classList.add('inputError');
    }
    else{
        document.getElementById('nationality').classList.remove('inputError');
    }
    //(!= means not empty)
    if(errors!=""){
        document.getElementById('errorList').innerHTML = errors; 
        return false;
    }

    else{
        document.getElementById('errorList').innerHTML= "";
        return true;
    }
    
    
    
    
    
}


function resetForm(){
    document.getElementById('errorList').innerHTML = "";
    document.getElementById('fullName').classList.remove('inputError');
    document.getElementById('fullUsername').classList.remove('inputError');
    document.getElementById('fullPassword').classList.remove('inputError');
    document.getElementById('nationality').classList.remove('inputError');


}   