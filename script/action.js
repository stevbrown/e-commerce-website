document.querySelector('#signup__close-notification').addEventListener('click', function() {
    try {
        const signUpNotification = document.getElementById('signup__notification');
        const computedStyle = window.getComputedStyle(signUpNotification);

        if (computedStyle.display != 'none') {
            signUpNotification.classList.add('closed');
            setTimeout(() => {
                signUpNotification.remove();
            }, 1300);
        }

    } catch (error) {
        console.log(`Error: ${error}`);
        alert(error);
    }
});

document.querySelector('#shop__review-left').addEventListener('click', function() {
    try {
        const list = document.getElementById('shop__review-list');

        list.scrollBy({
            left: -400,
        });

    } catch (error) {
        console.log(`Error: ${error}`);
        alert(error);
    }
});

document.querySelector('#shop__review-right').addEventListener('click', function() {
    try {
        const list = document.getElementById('shop__review-list');

        list.scrollBy({
            left: 400,
        });

    } catch (error) {
        console.log(`Error: ${error}`);
        alert(error);
    }
});

// Можно добавить плавность прокрутки
document.getElementById('shop__review-list').addEventListener('wheel', function(e) {
    try {
        // Получаем направление прокрутки
        const scrollAmount = e.deltaY > 0 ? 400 : -400;

        this.scrollBy({
            left: scrollAmount,
        });

        e.preventDefault();
        
    } catch (error) {
        console.error(`Произошла ошибка: ${error}`);
        alert('Произошла ошибка при прокрутке');
    }
});
