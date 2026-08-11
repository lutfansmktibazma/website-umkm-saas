document.addEventListener('DOMContentLoaded', function () {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function () {
                navMenu.classList.toggle('show');
            });

            document.querySelectorAll('.nav-menu a').forEach(function (link) {
                link.addEventListener('click', function () {
                    navMenu.classList.remove('show');
                });
            });

            document.addEventListener('click', function (e) {
                if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                    navMenu.classList.remove('show');
                }
            });
        }
    });
