import { enableContinueButton} from './new-booking-functions.js';

// Updates the selected performance card in the choice performance page
document.getElementById('available-doctors').addEventListener('click', function (event) {
    const card = event.target.closest('.doctor-card');
    if (!card) return;

    // Selects the new card
    card.classList.add('doctor-card-selected');

    const selectedIcon = card.children[1].children[1];
    if (selectedIcon) selectedIcon.classList.remove('check-icon-hidden');

    enableContinueButton(true);
});