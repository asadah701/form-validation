function validateform(){
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var bio = document.getElementById("bio").value;
    var date = document.getElementById("dob").value;
    var words = bio.split(' ');
    var gender = document.getElementById("gender").value;
    
    if(name.length > 20){
        document.getElementById("namefield").innerHTML="cannot exceed from 20 character";
        return false;
    }else{
        document.getElementById("namefield").innerHTML="";
    }
    if (/[^a-zA-Z0-9 \-\/]/.test(name)){
        document.getElementById("namefield").innerHTML="special character not allowed";
        return false;
    }else{
        document.getElementById("namefield").innerHTML="";
    }
    if(mobile.length > 10 ){
        document.getElementById("mobilefield").innerHTML="more than 10 digits are not allowed";
        return false;
    }else{
        document.getElementById("mobilefield").innerHTML="";
    }
    if(mobile.length < 10){
        document.getElementById("mobilefield").innerHTML="number should be of 10 digits";
    }else{
        document.getElementById("mobilefield").innerHTML="";
    }
    if(isNaN(mobile)){
        document.getElementById("mobilefield").innerHTML="only numbers are allowed";
        return false;
    }else{
        document.getElementById("mobilefield").innerHTML="";
    }
    if(email.indexOf('@') <= 0){
        document.getElementById("emailfield").innerHTML="email format is not valid";
        return false
    }else{
        document.getElementById("emailfield").innerHTML="";
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("emailfield").innerHTML="email format is not valid";
        return false;
    }else{
        document.getElementById("emailfield").innerHTML="";
    }
    if(words.length > 60){
        document.getElementById("biofield").innerHTML="textarea should not contain more than 60 words";
        return false;
    }else{
        document.getElementById("biofield").innerHTML=""; 
    }
    let formdata = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        bio: document.getElementById("bio").value,
        dateofbirth: document.getElementById("dob").value,
        gender: document.getElementById("gender").value
    }
    localStorage.setItem('formdata', JSON.stringify(formdata));
    displaydata();
    
}
function displaydata(){
    let{name, mobile, email, bio, dateofbirth, gender}=JSON.parse(localStorage.getItem('formdata'));
    var output = document.getElementById("message");
    output.innerHTML= `
    <table>
<tr>
<td>Name:</td>
<td>${name}</td>
</tr>
<tr>
<td>mobile:</td>
<td>${mobile}</td>
</tr>
<tr>
<td>Email:</td>
<td>${email}</td>
</tr>
<tr>
<td>Bio:</td>
<td>${bio}</td>
</tr>
<tr>
<td>DOB:</td>
<td>${dateofbirth}</td>
</tr>
<tr>
<td>gender:</td>
<td>${gender}</td>
</tr>
    </table>
    
    `;
}
const form = document.getElementById('form');
form.addEventListener("change",() => {
    document.getElementById('submit').disabled = !form.checkValidity()
});
function username(){
    var name = document.getElementById("name").value;
    if(name.length > 20){
        document.getElementById("namefield").innerHTML="cannot exceed from 20 character";
        return false;
    }else{
        document.getElementById("namefield").innerHTML="";
    }
    if (/[^a-zA-Z0-9 \-\/]/.test(name)){
        document.getElementById("namefield").innerHTML="special character not allowed";
        return false;
    }else{
        document.getElementById("namefield").innerHTML="";
    }
}
function mobilevalidate()
{
    var mobile = document.getElementById("mobile").value;
    if((mobile.length > 10 ) || (mobile.length < 10) || (isNaN(mobile))) {
        document.getElementById("mobilefield").innerHTML="please enter correct mobile number";
        return false;
    }else{
        document.getElementById("mobilefield").innerHTML="";
    }
}
function emailvalidate(){
    var email = document.getElementById("email").value;
    if(email.indexOf('@') <= 0){
        document.getElementById("emailfield").innerHTML="email format is not valid";
        return false
    }else{
        document.getElementById("emailfield").innerHTML="";
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById("emailfield").innerHTML="email format is not valid";
        return false;
    }else{
        document.getElementById("emailfield").innerHTML="";
    }
}
function biovalidate(){
    var bio = document.getElementById("bio").value;
    var words = bio.split(' ');
    if(words.length > 60){
        document.getElementById("biofield").innerHTML="textarea should not contain more than 60 words";
        return false;
    }else{
        document.getElementById("biofield").innerHTML=""; 
    }

}
