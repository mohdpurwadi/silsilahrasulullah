  // JavaScript to handle toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const toggleHeaders = document.querySelectorAll('.toggle-header');

            toggleHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    const content = this.nextElementSibling;
                    content.style.display = content.style.display === 'block' ? 'none' : 'block';
                });
            });
        });