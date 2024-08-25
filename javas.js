// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
const backToTopButton = document.createElement('div');
backToTopButton.innerHTML = '&#8679;';
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation (If you add a contact form)
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;
    let error = false;

    if (name === '') {
        alert('Please enter your name.');
        error = true;
    }
    if (email === '' || !email.includes('@')) {
        alert('Please enter a valid email address.');
        error = true;
    }
    if (message === '') {
        alert('Please enter your message.');
        error = true;
    }

    if (!error) {
        alert('Thank you for contacting me! I will get back to you soon.');
        document.querySelector('#contactForm').reset();
    }
});
