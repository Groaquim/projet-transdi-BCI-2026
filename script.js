function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}

function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = '✓ Message envoyé !';
    btn.style.background = 'linear-gradient(135deg, #00ff88, #00b4d8)';
    setTimeout(() => {
        btn.textContent = 'Envoyer le message →';
        btn.style.background = '';
        e.target.reset();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.style.color = a.getAttribute('href') === '#' + current
                ? 'var(--accent)' : '';
        });
    });
});
