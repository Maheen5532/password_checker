const correctPassword = "password123";
let attempts = 0;
const maxAttempts = 3;

function checkPassword() {
    let userInput = "";
    let result = document.getElementById('result');
    do {
        userInput = document.getElementById('passwordInput').value;

        if (userInput === correctPassword) {
            result.innerHTML = "Access granted!";
            result.style.color = "green";
            document.getElementById('passwordInput').disabled = true;
            break;
        } else {
            attempts++;


            document.getElementById('passwordInput').value = "";

            if (attempts < maxAttempts) {
                result.innerHTML = `Incorrect password. You have ${maxAttempts - attempts} attempts left.`;
                break;
            } else {
                result.innerHTML = "Access denied! You've reached the maximum number of attempts.";
                document.getElementById('passwordInput').disabled = true;
                break;
            }
        }
    } while (attempts < maxAttempts);
}