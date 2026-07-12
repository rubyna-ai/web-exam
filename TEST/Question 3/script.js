const loginBtn = document.getElementById("loginBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", () => {
    message.textContent = "Logging In...";
    loginBtn.disabled = true;

    const loginPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Welcome back!");
        }, 2000);
    });

    loginPromise.then((result) => {
        message.textContent = result;
        loginBtn.disabled = false;
    });
});