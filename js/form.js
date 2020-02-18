function formValidation() {
    let input1 = document.getElementById("login");
    let input2 = document.getElementById("pw");
    let input3 = document.getElementById("confirmPw");
    let input4 = document.getElementById("gender");
    let input5 = document.getElementById("email");
 
    if(input1.value ==""){
        document.getElementById("login").style.backgroundColor = "#F1948A" ;
    }
    else if(input1.value !=""){
        document.getElementById("login").style.backgroundColor = "#82E0AA";
    }

    if(input2.value == ""){
        document.getElementById("pw").style.backgroundColor = "#F1948A" ;
    }
    else{
        document.getElementById("pw").style.backgroundColor = "#82E0AA";
    }

    if(input3.value ==""){
        document.getElementById("confirmPw").style.backgroundColor = "#F1948A" ;
    }
    else if(input2.value != input3.value){
        document.getElementById("check").innerHTML = "Password do not match."
        document.getElementById("pw").style.backgroundColor = "#F1948A" ;
        document.getElementById("confirmPw").style.backgroundColor = "#F1948A" ;
    }
    else if(input2.value == input3.value){
        document.getElementById("pw").style.backgroundColor = "#82E0AA";
        document.getElementById("confirmPw").style.backgroundColor = "#82E0AA";
    }

    if(input4.value == "0"){
        document.getElementById("check").innerHTML = "Select a Gender.";
    }
    else if(input4.value != "0"){
        document.getElementById("check").innerHTML = "";
    }

    if(input5.value ==""){
        document.getElementById("email").style.backgroundColor = "#F1948A" ;
    }
    else{
        document.getElementById("email").style.backgroundColor = "#82E0AA";
    }

}