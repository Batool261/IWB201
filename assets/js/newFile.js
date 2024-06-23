



  let com =document.getElementById('com');
  let resultForm =document.getElementById('resultForm');


  com.onclick = function(){
    resultForm.style.display = 'block'
  }



     
function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
     document.getElementById("captcha").innerText = newCaptcha ;
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

document.addEventListener("DOMContentLoaded", function() {
    refreshCaptcha();
});














let National = document.getElementById('National').value
var sub = document.getElementById('sub')

sub.onclick = function fun()
{
   if( National.trim() === '' )  {
    window.alert ("يرجى ادخال الرقم بشكل صحيح")
   }
else if(National.length !==  11){
    window.alert("يرجى تعبئة 11 خانة")
}

}


function val(){
    let National = document.getElementById('National').value
    
    if(National === '')
        {
            alert('Error')
        }

        return false;


}

