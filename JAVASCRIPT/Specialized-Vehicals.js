document.addEventListener("DOMContentLoaded", function () {
    const slideInSection = document.getElementById('slideInSection');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                slideInSection.classList.add('show');
            }
        });
    });

    observer.observe(slideInSection);
});