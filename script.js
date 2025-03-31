

function toggleDropdown(element) {
    
    // Закрываем все другие активные dropdown-меню
    document.querySelectorAll(".sidebar li").forEach(li => {
        if (li !== element) {
            li.classList.remove("active");
        }
    });

    // Переключаем текущее меню
    element.classList.toggle("active");
}

// Закрытие меню при клике вне него (только в мобильной версии)
document.addEventListener("click", function (event) {
    let sidebar = document.getElementById("sidebar");
    let menuButton = document.querySelector(".menu-toggle");

    // Проверяем, где произошел клик
    if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
        sidebar.classList.remove("active");
    }
});

// Функция для открытия и закрытия бокового меню.

function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}




