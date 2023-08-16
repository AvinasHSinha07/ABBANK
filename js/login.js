console.log("connected")
document.getElementById('btn-submit').addEventListener('click',function(event){
    // console.log("submit btn clicked")

    const inputEmail = document.getElementById('input-email')
    // console.log(inputEmail)
    const emailValue = inputEmail.value 
    // console.log(emailValue)

    const inputPass = document.getElementById('input-pass')
    const passValue = inputPass.value
    // console.log(passValue)
    if(emailValue === 'avinash@gmail.com' && passValue === 'avinash'){
        console.log("valid user")
        window.location.href = 'bank.html'
    }
    else{
        // console.log("invalid user")
        alert("You are a invalid user")
    }
   




})