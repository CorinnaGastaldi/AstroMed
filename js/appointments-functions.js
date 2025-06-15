function showAdSection() {
    const adSection = document.getElementById('ad-section');
    if (adSection) {
        adSection.classList.remove('d-none');
    }
}

function hideAdSection() {
    const adSection = document.getElementById('ad-section');
    if (adSection) {
        adSection.classList.add('d-none');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const showAdBtn = document.getElementById('show-details-btn');
    if (showAdBtn) {
        showAdBtn.addEventListener('click', showAdSection);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const showAdBtn = document.getElementById('close-details-btn');
    if (showAdBtn) {
        showAdBtn.addEventListener('click', hideAdSection);
    }
});

