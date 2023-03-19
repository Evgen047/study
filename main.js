emailElem = document.querySelector('#email')
pswElem = document.querySelector('#psw')
ifiElem = document.querySelector('#ifi')
fb_LoginElem = document.querySelector('#fb_Login')
li_LoginElem = document.querySelector('#li_Login')
LogElem = document.querySelector('#Log')

function collectFormData(){
    data = {
     email: emailElem.value,
    password: pswElem.value,
    inputfield: ifiElem.value
 }
 console.log(data)
 }

fb_LoginElem.addEventListener("click", collectFormData)
li_LoginElem.addEventListener("click", collectFormData)
LogElem.addEventListener("click", collectFormData)
