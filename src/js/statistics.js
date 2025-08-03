// statistics
document.addEventListener("DOMContentLoaded", function () {
    // Rəqəmlərin artım sürətini təyin edir
    const speed = 200;
    // Hər bir statistik rəqəmi tapır
    const statisticsNumbers = document.querySelectorAll('.statistic-number');
    // Intersection Observer üçün callback funksiyası
    const animateNumbers = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const updateCount = () => {
                    // const targetNumber = +target.innerText;
                    const targetNumber = +target.innerText.replace(/\D/g, '');

                    const increment = targetNumber / speed;

                    let count = 0;

                    const animate = () => {
                        count += increment;
                        if (count < targetNumber) {
                            target.innerText = Math.floor(count);
                            requestAnimationFrame(animate);
                        } else {
                            target.innerText = targetNumber;

                        }
                    };
                    animate();
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    };

    // Intersection Observer konfiqurasiyası
    const observer = new IntersectionObserver(animateNumbers, {
        threshold: 1.0
    });

    // Hər bir statistik rəqəmi müşahidə etməyə başlayır
    statisticsNumbers.forEach(number => {
        observer.observe(number);
    });
});
// statistics end