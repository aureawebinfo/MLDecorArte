const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        // Toggle menu
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        function toggleMenu() {
            if(!menu.classList.contains('hidden')){
                menu.classList.add('hidden');
            }
        }