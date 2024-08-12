// Mobile Navigation Toggle
const navLinks = document.querySelector('.nav-links');
const toggleButton = document.createElement('button');
toggleButton.innerText = 'Menu';
toggleButton.className = 'toggle-button';
document.querySelector('nav').appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Image Viewer
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.createElement('div');
const modalImage = document.createElement('img');
const modalClose = document.createElement('span');

modal.className = 'modal';
modalClose.innerHTML = '&times;';
modalClose.className = 'modal-close';

modal.appendChild(modalImage);
modal.appendChild(modalClose);
document.body.appendChild(modal);

galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        modalImage.src = e.target.src;
        modal.style.display = 'block';
    });
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () 
{
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) 
    {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) 
        {
            alert('Please fill in all fields.');
            e.preventDefault();
        } 
        else
        {
            alert('Form submitted successfully!');
        }
    });
});
