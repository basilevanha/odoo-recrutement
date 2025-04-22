// Small utility to change the color of the card

const versions = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
];

const customCard = document.querySelector('[js-custom-card-container]');

document.querySelectorAll('[js-custom-card-btn]').forEach(btn => {
    console.log(btn.dataset.version)
    
    btn.addEventListener('click', function() {
        customCard.classList.remove(...versions);
        customCard.classList.add(this.dataset.version);

        document.querySelectorAll('[js-custom-card-btn]').forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    })
})