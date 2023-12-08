document.addEventListener('DOMContentLoaded', function () {
    var showFormButton = document.getElementById('showFormButton');
    var closeFormButton = document.getElementById('closeFormButton');
    var popupForm = document.getElementById('popupForm');

    showFormButton.addEventListener('click', function () {
        popupForm.style.display = 'block';
    });

    closeFormButton.addEventListener('click', function () {
        popupForm.style.display = 'none';
    });

    // Закривати форму, якщо користувач клікає поза нею
    window.addEventListener('click', function (event) {
        if (event.target == popupForm) {
            popupForm.style.display = 'none';
        }
    });
});
