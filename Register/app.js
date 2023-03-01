var error=document.getElementById("error");
function valid(event){
    //FName
    var fName=document.getElementById("fName"); 
    var exp1=/^[a-zA-Z]+$/;
    if(fName.value==""){
        error.innerHTML="Enter First your Name";
        fName.focus();
        return false;
    }
    else if(fName.value.length<=3||fName.value.length>12){
        error.innerHTML="Your First Name should be min 3 and max upto 8 characters";
        fName.focus();
        return false;
    }
    else if(exp1.test(fName.value)==false){
        error.innerHTML="Name should not contain numbers and special characters";
        fName.focus();
        return false;
    }
    else{
        error.innerHTML="";
    }
    //Last Name
    var lName=document.getElementById("lName");
    if(lName.value==""){
        error.innerHTML="Enter last name";
        lName.focus();
        return false;
    }
    else if(lName.value.length>8){
        error.innerHTML="Your Last Name should be less than 8 characters";
        lName.focus();
        return false;
    }
    else if(exp1.test(lName.value)==false){
        error.innerHTML="Name should not contain numbers and special characters";
        lName.focus();
        return false;
    }
    else{
        error.innerHTML="";
    }
    //phone number
    var phone=document.getElementById("phNum");
    var exp2=/^[6-9]{1}[0-9]{9}$/;
    if(phone.value==""){
        error.innerText="Enter your Mobile Number";
        phone.focus();
        return false;
    }
    else if(exp2.test(phone.value)==false){
        error.innerHTML="Mobile Number is not valid";
        phone.focus();
        return false;
    }
    else{
        error.innerHTML="";
    }
    //password
    var pwd=document.getElementById("pwd");
    if(pwd.value==""){
        error.innerText="Enter Password";
        return false;
    }
    else if(pwd.value.length<=8){
        error.innerHTML="Password must have 8 or more characters";
        return false;
    }
    else{
        error.innerHTML="";
    }

    var cPwd=document.getElementById("cpwd");
    if(cPwd.value==""){
        error.innerHTML="Re enter the password in Confirm Password";
        return false;
    }
    else if(cPwd.value!==pwd.value){
        error.innerHTML="Password didn't match";
        return false;
    }
    else{
        error.innerHTML="";
    }
    //Address
    
    var address=document.getElementById("address");
    var address2=document.getElementById("address2");
    if(address.value==""||address2.value==""){
        error.innerHTML="Address cannot be empty";
        return false;
    }
    else if(address.value.length>60||address2.value.length>60){
        error.innerHTML="address cannot have more than 120 characters";
        return false;
    }
    else{
        error.innerHTML="";
    }
    alert("You have successfully registered");
}