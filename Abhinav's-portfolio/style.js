// ── MOBILE MENU ──────────────────────────────────────────────
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}

function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('open');
}

// Close menu when clicking outside
document.addEventListener('click', function (e) {
    const nav = document.querySelector('.nav');
    const navLinks = document.getElementById('navLinks');
    if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
    }
});

// ── SCROLL REVEAL ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el);
});

// ── ACTIVE NAV HIGHLIGHT ON SCROLL ───────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('#navLinks a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 100) {
            current = section.id;
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ── CONTACT FORM ──────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = '#00e5a0';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = 'Send Message';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        contactForm.reset();
    }, 3000);
});
