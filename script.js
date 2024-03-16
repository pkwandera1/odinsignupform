 
document.getElementById('myForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const messageElement = document.getElementById('passwordMatchMessage'); 
    if (password !== confirmPassword){
        messageElement.textContent = 'Password does not match';
        messageElement.style.color = 'red';
        event.preventDefault();
    }
})
