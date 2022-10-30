/* Add your JavaScript to this file */
window.onload = function(){

    var email = document.getElementById("email");
    var msg = document.getElementsByClassName("message")[0];
    var subbtn = document.getElementsByTagName("button")[0];

    subbtn.addEventListener("click", (event) => {
        event.preventDefault();
        if(email.value === "" || email.value === null)
        {
            msg.textContent = "Please enter a valid email address."
        }

        else
        {
            msg.textContent = `Thank you! Your email address, ${email.value}, has been added to our mailing list!`;
        }
    })

}



