document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('for-me-button')?.addEventListener('click', () => handleSwitcherToggle('for-me'));
    document.getElementById('for-relative-button')?.addEventListener('click', () => handleSwitcherToggle('for-relative'));
});

// Gestisce la selezione del tipo di prenotazione ("for-me" o "for-relative")
export function handleSwitcherToggle(type) {
    const forMeBtn = document.getElementById('for-me-button');
    const forRelativeBtn = document.getElementById('for-relative-button');
    const forMeSection = document.getElementById('for-me-container');
    const forRelativeSection = document.getElementById('for-relative-container');

    if (!forMeBtn || !forRelativeBtn || !forMeSection || !forRelativeSection) return;

    if (type === 'for-relative') {
        forMeBtn.classList.remove('category-button-active');
        forMeBtn.classList.remove('text-color-purple');
        forMeBtn.classList.add('text-color-dark-grey');

        forRelativeBtn.classList.add('category-button-active');
        forRelativeBtn.classList.add('text-color-purple');
        forRelativeBtn.classList.remove('text-color-dark-grey');

        forMeSection.classList.add('d-none');
        forRelativeSection.classList.remove('d-none');

    } else if (type === 'for-me') {
        forMeBtn.classList.add('category-button-active');
        forMeBtn.classList.add('text-color-purple');
        forMeBtn.classList.remove('text-color-dark-grey');

        forRelativeBtn.classList.remove('category-button-active');
        forRelativeBtn.classList.remove('text-color-purple');
        forRelativeBtn.classList.add('text-color-dark-grey');

        forMeSection.classList.remove('d-none');
        forRelativeSection.classList.add('d-none');
    }
}