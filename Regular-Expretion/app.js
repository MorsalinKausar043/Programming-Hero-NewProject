document.getElementById("submit").addEventListener("click", () => {
    const inputEmail = document.getElementById("email-input");
    const EmailData = inputEmail.value;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EmailData))
    {
        alert("login Successfully")
    } else
    {
        alert("login unsuccessfull")
    }
})