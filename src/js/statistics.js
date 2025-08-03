document.addEventListener("DOMContentLoaded", function () {
    const speed = 200;
    const statisticsNumbers = document.querySelectorAll('.statistic-number');
    const animateNumbers = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const updateCount = () => {
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

    const observer = new IntersectionObserver(animateNumbers, {
        threshold: 1.0
    });

    statisticsNumbers.forEach(number => {
        observer.observe(number);
    });
});
