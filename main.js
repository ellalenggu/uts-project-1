document.getElementById('promo-btn').addEventListener('click', function () {
    document.getElementById('promo-popup').classList.remove('hidden');
});

document.getElementById('contact-popup-btn').addEventListener('click', function () {
    document.getElementById('contact-popup').classList.remove('hidden');
});

function closePopup() {
    document.getElementById('contact-popup').classList.add('hidden');
}

function closePromoPopup() {
    document.getElementById('promo-popup').classList.add('hidden');
}
