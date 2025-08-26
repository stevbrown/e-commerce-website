document.addEventListener("DOMContentLoaded", function () {
    const signUpNotification = document.getElementById('signup__notification');
    const header = document.getElementById('shop__header');

    setTimeout(() => {
        header.style.marginTop = `${signUpNotification.offsetHeight}px`;
    }, 100);
});


