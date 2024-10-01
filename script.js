document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const headerList = document.getElementById('header-list');

    burgerMenu.addEventListener('click', function () {
        headerList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Выбираем все ссылки внутри списка header-list
    const anchors = document.querySelectorAll(".header-list a");

    anchors.forEach(anc => {
        anc.addEventListener("click", function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки

            const id = anc.getAttribute("href"); // Получаем значение href атрибута
            const elem = document.querySelector(id); // Находим элемент по id

            window.scroll({
                top: elem.offsetTop - 10, // Прокручиваем страницу до нужного элемента
                behavior: 'smooth' // Плавная прокрутка
            });

            // Закрываем меню после клика на ссылку
            headerList.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });
});
